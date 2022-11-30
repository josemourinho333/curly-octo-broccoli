import { AiFillPlayCircle } from 'react-icons/ai';
import { SiEthereum } from 'react-icons/si';
import { BsInfoCircle } from 'react-icons/bs';
import Loader from './Loader';
import { TransactionContext } from '../context/TransactionContext';
import React, {useContext} from 'react';

const Input = ({placeHolder, name, type, value, handleChange}) => {
  return (
    <input 
      placeholder={placeHolder}
      name={name}
      type={type}
      step="0.0001"
      value={value}
      onChange={(e) => handleChange(e, name)}
      className="my-2 w-full rounded-sm p-2 outline-none bg-white/10 border-none text-sm"
    />
  )
}


const Welcome = () => {
  const { connectWallet, currentAccount, formData, sendTransaction, handleFormChange } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { addressTo, amount, keyword, message } = formData;

    if (!addressTo || !amount || !keyword || !message) {
      return;
    } else {
      sendTransaction();
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center bg-teal-300">
      <div className="flex md:flex-row md:gap-[1rem] flex-col items-center justify-between md:p-20 py-12 px-4 gap-[5rem] ">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl py-1">
            Send Crypto <br /> or something 
          </h1>
          <p className="text-left mt-5 font-light md:w-9/12 w-11/12 text-base">
            Super minimal blockchain app.
          </p>
          {!currentAccount 
            ? <button type="button" onClick={connectWallet} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]">
                <p className="text-white text-base font-semibold">Connect Your Wallet</p>
              </button>
            : <button disabled type="button" onClick={connectWallet} className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-not-allowed hover:bg-[#2546bd]">
                <p className="text-white text-base font-semibold">Wallet is connected</p>
              </button>
          }
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-black text-white rounded-xl">
            <Input placeHolder="Address To" name="addressTo" type="text" handleChange={handleFormChange} />
            <Input placeHolder="ETH Amount" name="amount" type="number" handleChange={handleFormChange} />
            <Input placeHolder="Gif (Keyword)" name="keyword" type="text" handleChange={handleFormChange} />
            <Input placeHolder="Message" name="message" type="text" handleChange={handleFormChange} />
            <div className="h-[1px] w-full bg-gray-400 my-2"/>

            {false ? (
              <Loader />
            ) : (
              <button type="button" onClick={handleSubmit} className="text-white bg-[#2952e3] w-full mt-2 border-[1px] p-2 border-[#2952e3] rounded-full cursor-pointer">
                Send
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Welcome;