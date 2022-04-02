import { EnvsMain, EnvsAspect } from '@teambit/envs'
import { HtmlAspect, HtmlMain } from '@teambit/html'

export class HtmlEnvExtension {
  constructor(private html: HtmlMain) {}

  static dependencies: any = [EnvsAspect, HtmlAspect]

  static async provider([envs, html]: [EnvsMain, HtmlMain]) {
    const HtmlEnvEnv = html.compose([
      /*
        Use any of the "html.override..." transformers to
      */
    ])

    envs.registerEnv(HtmlEnvEnv)

    return new HtmlEnvExtension(html)
  }
}
