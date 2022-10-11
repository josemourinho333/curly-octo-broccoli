import Services from '../components/Services'
import Transactions from '../components/Transactions'
import Welcome from '../components/Welcome'
import styles from '../styles/Home.module.css'

import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export default function Home() {



  return (
    <>
      <div className="gradient-bg-welcome">
        <Welcome />
      </div>
      <Services />
      <Transactions />
    </>
  )
}
