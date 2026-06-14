import { Button, Flex } from 'antd';

export default function Menu() {
  return (
    < div className="menu-div">
      <div>
        <span className="span-titulo">DEVELOPER AS A SERVICES</span>
      </div>
      <div>
        <p>high-performance React & Javascript solutions delivered as high-quality products. Engineering excellence through technical minimalism</p>
      </div>
      <>
        <Flex gap="small" wrap className="button-project">
          <Button type="primary" size="small" className='project-boton'>INICIALIZE_PROJECT</Button>
        </Flex>
        <Flex gap="small" wrap className="button-project">
          <Button type="default" size="small" className='project'>VIEW_STACK</Button>
        </Flex>
      </>
    </div>
  )
}
