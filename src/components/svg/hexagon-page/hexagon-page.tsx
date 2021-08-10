import React, { useState, useCallback, useEffect } from 'react';
import { HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils } from 'react-hexgrid';
import styles from './hexagon-page.module.scss'
import * as d3 from 'd3'

export type HexagonPageProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function HexagonPage({ text }: HexagonPageProps) {

  const configs = {
    "hexagon": {
      "width": 1000,
      "height": 800,
      "layout": { "width": 80, "height": 80, "flat": false, "spacing": 1.1 },
      "origin": { "x": 100, "y": 100 },
      "map": "hexagon",
      "mapProps": [5]
    }
  }
  const config = configs['hexagon']
  const layout = config.layout;
  const size = { x: layout.width, y: layout.height };

  const [hex, setHex] = useState([]);
  const [width, setWidth] = useState<number>(config.width);
  const [height, setHeight] = useState<number>(config.height);
  const [origin, setOrigin] = useState<{ x: number, y: number }>(config.origin);

  const resizeFn = useCallback(
    () => {
      setWidth(window.innerWidth * 1)
      setHeight(window.innerHeight * 1)

      setOrigin({
        x: (window.innerWidth * 1) / 2,
        y: (window.innerHeight * 1) / 2,
      })
    },
    [],
  )

  useEffect(() => {
    resizeFn()
    window.addEventListener('resize', resizeFn)
  }, []);

  useEffect(() => {
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(null, config.mapProps);

    console.log('hexagons', hexagons)
    setHex(hexagons)

    setContainerDrag()
  }, []);

  // 设置内容拖动 缩放
  const setContainerDrag = useCallback(() => {
    const svg = d3.select('#container svg')
    const zoom = d3.zoom()

    svg.call(
      // @ts-ignore
      zoom
        .extent([[0, 0], [width, height]])
        .scaleExtent([0.6, 4])
        .on("zoom", zoomed)
    )

    function zoomed({ transform }: any) {
      let tran = transform
      const svg = d3.select('#container svg > g')
      svg.attr("transform", tran);
    }
    svg.node();
  }, []);


  /**
   * 立方体坐标转轴坐标
   * https://www.redblobgames.com/grids/hexagons/#conversions
   * @param x
   * @param y
   * @returns
   */
  const cubeToAxial = (x: number, y: number, z: number) => ({
    x: x,
    y: z
  })

  /**
   * 轴转立方体坐标坐标
   * https://www.redblobgames.com/grids/hexagons/#conversions
   * @param x
   * @param y
   * @returns
   */
  const axialToCube = (x: number, y: number) => ({
    x: x,
    y: -x-y,
    z: y,
  })


  /**
   * 计算偏移位置
   */
  const calcTranslate = ({ x, y }: { x: number, y: number }) => {
    // https://www.redblobgames.com/grids/hexagons/#hex-to-pixel
    // 方向不同 算法有细微差别

    let _x = layout.width * (Math.sqrt(3) * -x + Math.sqrt(3) / 2 * -y)
    let _y = layout.height * (3 / 2 * -y)
    _x = _x * layout.spacing
    _y = _y * layout.spacing
    return {
      x: _x, y: _y
    }
  }

  /**
   * 偏移地图坐标
   */
  const translateMap = ({ x, y, z }: { x: number, y: number, z: number }) => {
    const svg = d3.select('#container svg')
    const zoom = d3.zoom()

    // 坐标转换，这么写方便后续能阅读懂
    const { x: hexX, y: HexY } = cubeToAxial(x, y, z)
    let { x: _x, y: _y } = calcTranslate({ x: hexX, y: HexY })
    console.log('_x', _x, _y)
    // TODO: 暂时不知道为什么这里不能偏移

    svg.transition()
    .duration(1000)
    .call(
      // @ts-ignore
      zoom.transform,
      d3.zoomIdentity.translate(_x, _y).scale(1),
    )
  }

  return (
    <>
      <div id="container" className={ styles.container }>
        <HexGrid width={width} height={height} viewBox={`0, 0, ${Math.floor(width)}, ${Math.floor(height)}`} >
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={origin}>
            {
              // note: key must be unique between re-renders.
              // using config.mapProps+i makes a new key when the goal template chnages.
              hex.map((hex: any, i) => {
                let x = hex.q
                let y = hex.s
                let z = hex.r

                return (
                  <Hexagon
                    key={i}
                    q={hex.q}
                    r={hex.r}
                    s={hex.s}
                    onClick={() => translateMap({ x, y, z })}
                    className={`${styles[`hexagon-default`]} hexagon-x${x}_y${y}_z${z}`}>
                    {/* <Text>{HexUtils.getID(hex)}</Text> */}
                    {/* <Text>{`x: ${hex.q}, z: ${hex.r}, y: ${hex.s}`}</Text> */}
                    {/* <Text>{`x: ${hex.q}, z: ${hex.r}, y: ${hex.s}`}</Text> */}
                  </Hexagon>
                )
              })
            }
          </Layout>
        </HexGrid>
      </div>
      <svg width="100%" height="100%" id="mask-container" className={ styles['mask-container'] }>
        <defs>
          <mask id="mask" maskUnits="userSpaceOnUse" maskContentUnits="userSpaceOnUse">
            <linearGradient id="linearGradient" gradientUnits="objectBoundingBox" x2="0" y2="1">
              <stop stopColor="white" stopOpacity="0" offset="0%" />
              <stop stopColor="white" stopOpacity="1" offset="20%" />
              <stop stopColor="white" stopOpacity="1" offset="40%" />
              <stop stopColor="white" stopOpacity="1" offset="60%" />
              <stop stopColor="white" stopOpacity="1" offset="80%" />
              <stop stopColor="white" stopOpacity="0" offset="100%" />
            </linearGradient>
            <rect width="100%" height="100%" fill="url(#linearGradient)" />
          </mask>
        </defs>
      </svg>
    </>
  );
}
