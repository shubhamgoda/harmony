// TODO: Add more props!
type Props = {
  readonly clickIncome: number
  readonly tickIncome: number
  readonly brbs
  readonly setBRBs
}

const ClickerSection = ({ clickIncome, tickIncome, brbs, setBRBs }: Props) => {
  // TODO: The "real" BRB count state is "lifted up" to Game.tsx
  // so pass it down here through props! (and remove this variable)
  return (
    <div>
      <h2>Balance: ${brbs} BRBs</h2>
      <p>Income per click: {clickIncome} BRBs</p>
      <p>Income per tick: {tickIncome} BRBs</p>
      {/* TODO: Make this button do something! */}
      <button onClick={() => setBRBs(brbs + clickIncome)}>Acquire BRB</button>
    </div>
  )
}

export default ClickerSection
