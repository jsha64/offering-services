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
        <div>
            <div>
                <div>
                    <span>MVP_START</span>
                    <span></span>
                </div>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <button>DEPLOY_MVP</button>
                </div>
            </div>
            <div>
                <div>
                    <span>PRO_SCALE</span>
                    <span></span>
                </div>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <button>DEPLOY_PRO</button>
                </div>
            </div>
            <div>
                <div>
                    <span>ENTERPRISE</span>
                    <span></span>
                </div>
                <div>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <button>DEPLOY_ENTERPRISE</button>
                </div>
            </div>
        </div>
    </div>
  )
}
