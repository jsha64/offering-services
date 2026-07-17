import { Icon } from "@iconify/react";

export default function TechStack() {
  return (
    <div className="apartado-tech">
        <div>
            <span>TECH_STACK</span>
        </div>
        <div className="techstack-containers">
            <Icon icon="mdi:react" width={'50'} /> 
            <span>React</span>
        </div>
        <div className="techstack-containers">
            <Icon icon="file-icons:config-js" width={'40'} />
            ES6+
        </div>
        <div className="techstack-containers">
            <Icon icon="akar-icons:html-fill" width={'40'} />
            HTML
        </div>
        <div className="techstack-containers">
            <Icon icon="simple-icons:vite" width={'30'}/>
            VITE
        </div>
        <div className="techstack-containers">
            <Icon icon="teenyicons:git-fork-solid" width={'30'}/>
            GIT
        </div>
        <div className="techstack-containers">
            <Icon icon="lineicons:postman" width={'40'}/>
            POSTMAN
        </div>
    </div>
  )
}
