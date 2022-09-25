import { userAddress, useMetamask, useAddress } from '@thirdweb-dev/react'

const App = () => {
  const address = useAddress();
  const connectWithMetamask = useMetamask();
  console.log("Address:", address);
  if(!address) {
    return (
      <div className="landing">
        <h1>Welcome to MyDAO</h1>
        <button onClick={connectWithMetamask} className="btn-hero">
          connect your wallet
        </button>
      </div>
    )
  }

  return (
    <div className="landing">
      <h1>Welcome to My DAO</h1>
      <h2>wallet connected, now wat?</h2>
    </div>
  );
};

export default App;
