import { MenuOutlined } from "@ant-design/icons"
import { Button, Flex } from 'antd';

export default function Nav() {
  return (
    <div className="nav-div">
      <div>Logotipo</div>
      <ul className="ul">
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
      </ul> 
      
      <div className="burguer-div">
        <Flex gap="small" wrap>
          <Button type="primary" size="small">Get</Button>
        </Flex>
        <Flex >
          <MenuOutlined />
        </Flex>
      </div>
    </div>
  )
}
