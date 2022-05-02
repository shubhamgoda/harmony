import { Upgrade } from "../../types"

// TODO: Modify this to pass more props down from parent
type Props = {
  readonly upgrade: Upgrade
  readonly brbs: number
  readonly setBRBs
  readonly upgradeCounts: Map<Upgrade, number>
  readonly setUpgradeCounts
}

const UpgradeDisplay = ({ upgrade, brbs, setBRBs, upgradeCounts, setUpgradeCounts }: Props) => {
  // TODO: Calculate this using upgradeCounts which should be passed down
  const purchasedCount = upgradeCounts.get(upgrade)
  // TODO: Make price increase as you purchase more
  const price = Math.round(upgrade.basePrice * (1.15) ** (upgradeCounts.get(upgrade)))

  const buyUpgrade = () => {
    if (brbs < price) return
    // TODO: What is missing here?
    const newValue = upgradeCounts.set(upgrade, upgradeCounts.get(upgrade) + 1);
    setUpgradeCounts(new Map(newValue))
    setBRBs(brbs - price)
  }

  let boolCond = brbs < price
  return (
    <div>
      <h3>
        {upgrade.name} [{purchasedCount}]
      </h3>
      <p>Effect: {upgrade.incomePerTick} BRBs/tick</p>
      <p>Price: {price} BRBs</p>
      {/* TODO: Disable buy button (grey out) if you can't afford upgrade */}
      <button onClick={buyUpgrade} disabled={boolCond}>Buy</button>
    </div>
  )
}

export default UpgradeDisplay
