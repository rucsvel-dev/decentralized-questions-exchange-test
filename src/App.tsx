import React from 'react'
import logo from './logo.svg'
import './App.css'
import Web3StorageProvider from './features/Web3Storage/Web3Storage.provider'
import P2PNetwworkProvider from './features/P2PNetwork/P2PNetwork.provider'
import UploadQuestionTest from './components/UploadQuestionTest/UploadQuestionTest'

function App() {
  return (
    <Web3StorageProvider>
      <P2PNetwworkProvider>
        <div>
          <UploadQuestionTest />
        </div>
      </P2PNetwworkProvider>
    </Web3StorageProvider>
  )
}

export default App
