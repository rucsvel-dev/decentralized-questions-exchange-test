import { useState, useMemo, useEffect, FC, ReactNode } from 'react'
import { Web3Storage } from 'web3.storage'

import Web3StorageContext from './Web3Storage.context'

const Web3StorageProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const storageProvider = new Web3Storage({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVDQTcyNDk2RDdjYTNCNjhiZmNkMDlFOTA4Qzg2NTlkMjY4ODg4MTAiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTM2NDYyODQ5NjMsIm5hbWUiOiJkZWNlbnRyYWxpemVkLXF1ZXN0aW9uLWV4Y2hhbmdlLXN0YWdlIn0.fH00iQ6t56mwczdmPoq4nCYzruuLgKg9PIdKIb1L26M',
  })

  const web3StorageApi = useMemo(
    () => ({
      storageProvider,
    }),
    [storageProvider],
  )

  return (
    <Web3StorageContext.Provider value={web3StorageApi}>
      {children}
    </Web3StorageContext.Provider>
  )
}

export default Web3StorageProvider
