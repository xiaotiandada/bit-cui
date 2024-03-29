import React from 'react';
// import Icon from '@ant-design/icons';

export type IconProps = {
  /**
   * a text to be rendered in the component.
   */
  text: string
};

export function Icon({ text }: IconProps) {
  return (
    <div>
      {text}
    </div>
  );
}


// const EmailSvg = () => (
//   <svg className="icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1715" width="200" height="200"><path d="M513 583.8l448.5-448.5c-11.6-4.7-24.3-7.3-37.5-7.3H100c-12.7 0-24.9 2.4-36.1 6.7L513 583.8z" fill="" p-id="1716"></path><path d="M513 674.3L14.6 175.9C5.3 191.1 0 208.9 0 228v568c0 55.2 44.8 100 100 100h824c55.2 0 100-44.8 100-100V228c0-18.5-5.1-35.9-13.9-50.8L513 674.3z" fill="" p-id="1717"></path></svg>
// );
// export const EmailIcon: React.FC = props => <Icon component={EmailSvg} {...props} />;

// const USvg = () => (
//   <svg className="icon-svg" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10411" width="200" height="200"><path d="M870.515838 62.986543l0 565.154617c0 111.332644-31.92613 194.434318-95.733365 249.309112-60.59303 51.635007-147.84728 77.449953-261.761726 77.449953-50.895157 0-96.941889-6.460132-138.14736-19.371186-56.559157-17.742083-102.605889-46.37419-138.149407-85.913718-45.249577-50.823526-67.858504-121.005958-67.858504-210.568786L168.865477 62.986543l185.411827 0 0 563.791573c0 57.271378 14.538111 100.631932 43.62252 130.062218 29.084409 29.443589 66.231447 44.155662 111.48921 44.155662 60.59303 0 105.011682-14.112416 133.299959-42.341341 28.27088-28.230971 42.412972-69.37709 42.412972-123.412774L685.101965 62.986543 870.515838 62.986543z" p-id="10412"></path></svg>
// );
// export const UIcon: React.FC = props => <Icon component={USvg} {...props} />;