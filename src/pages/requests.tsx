
import { WalletButton } from "@rainbow-me/rainbowkit";
const Requests = () => {
    return (
        <div className="bg-[#212121] min-h-screen min-w-screen text-white">
            {/* request page */
            }
            <WalletButton.Custom wallet="rainbow">
  {({ ready, connect }) => {
    return (
      <button
        type="button"
        disabled={!ready}
        onClick={connect}
      >
        Connect Rainbow
      </button>
    );
  }}
</WalletButton.Custom>
        </div>
    )
}

export default Requests;