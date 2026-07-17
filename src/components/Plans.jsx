import { Icon } from "@iconify/react";

export default function Plans() {
  return (
    <div>
        <div>
            <span>DEPLOYEMENT_PLANS</span>
        </div>
        <label class="switch">
            <input type="checkbox" />
            <span class="slider"></span>
        </label>
        <div className="deployement-plans">
            <div className="mvp-start-div">
                <div className="precios">
                    <span>MVP_START</span>
                    <span>$2,499/fixed</span>
                </div>
                <div>
                    <div className="div-checkbox">
                       <Icon icon="material-symbols:check" className="blue-icon-check" />
                       <p>Basic component structure</p> 
                    </div>
                    <div className="div-checkbox">
                        <Icon icon="material-symbols:check" className="blue-icon-check" />
                        <p>1 REST API integration</p>
                    </div>
                    <div className="div-checkbox">
                        <Icon icon="material-symbols:check" className="blue-icon-check" />
                        <p>Single breakpoint responsive</p>
                    </div>
                    <div className="div-checkbox disable">
                        <Icon icon="gridicons:cross"/>
                        <p>Context API Management</p>
                    </div>
                    <button className="deploy-mvp">DEPLOY_MVP</button>
                </div>
            </div>
            <div className="mvp-start-div">
                <div className="precios">
                    <span>PRO_SCALE</span>
                    <span>$5,999/fixed</span>
                </div>
                <div>
                    <div className="div-checkbox">
                       <Icon icon="material-symbols:check" className="blue-icon-check" />
                       <p>Full React application</p> 
                    </div>
                    <div className="div-checkbox">
                        <Icon icon="material-symbols:check" className="blue-icon-check" />
                        <p>Context API / Redux Toolkit</p>
                    </div>
                    <div className="div-checkbox">
                        <Icon icon="material-symbols:check" className="blue-icon-check" />
                        <p>Scalable architecture</p>
                    </div>
                    <div className="div-checkbox disable">
                        <Icon icon="gridicons:cross"/>
                        <p>5-7 API Endpoint clusters</p>
                    </div>
                    <div className="div-checkbox disable">
                        <Icon icon="gridicons:cross"/>
                        <p>Full responsiveness audit</p>
                    </div>
                    <button className="deploy-pro">DEPLOY_PRO</button>
                </div>
            </div>
            <div className="mvp-start-div">
                <div className="precios">
                    <span>ENTERPRISE</span>
                    <span>CUSTOM/retainer</span>
                </div>
                <div>
                    <div className="div-checkbox">
                       <Icon icon="material-symbols:check" className="blue-icon-check" />
                       <p>Complex business logic</p> 
                    </div>
                    <div className="div-checkbox">
                        <Icon icon="material-symbols:check" className="blue-icon-check" />
                        <p>reduce() data transformation</p>
                    </div>
                    <div className="div-checkbox">
                        <Icon icon="material-symbols:check" className="blue-icon-check" />
                        <p>Multi-service integration</p>
                    </div>
                    <div className="div-checkbox disable">
                        <Icon icon="gridicons:cross"/>
                        <p>Custom UI library build</p>
                    </div>
                    <button className="deploy-enterprise">DEPLOY_ENTERPRISE</button>
                </div>
            </div>
        </div>
    </div>
  )
}
