import { UPGRADES_DATA } from "../../data"
import UpgradeDisplay from "./UpgradeDisplay"

// TODO: Modify this to pass more props down from parent
type Props = {
  readonly brbs: number
  readonly setBRBs
  readonly upgradeCounts
  readonly setUpgradeCounts
}

const UpgradesSection = ({ brbs, setBRBs, upgradeCounts, setUpgradeCounts }: Props) => {
  return (
    <div>
      <h2>Upgrades</h2>
      {UPGRADES_DATA.map((upgrade) => (
        // TODO: Add more props!
        <UpgradeDisplay key={upgrade.id} upgrade={upgrade} brbs={brbs} setBRBs={setBRBs} upgradeCounts={upgradeCounts} setUpgradeCounts={setUpgradeCounts} />
      ))}
    </div>
  )
}

export default UpgradesSection
