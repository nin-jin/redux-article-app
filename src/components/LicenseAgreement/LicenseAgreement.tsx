import React from 'react'
import Checkbox from 'components/Checkbox'
import AgreementSubmitButton from 'components/AgreementSubmitButton'

const LicenseAgreement: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 600 }}>
        <h1>End User License Agreement</h1>
        <p>
          This End User License Agreement ("License") is an agreement between you and me. This
          License governs your use of this application and all related software, documentation, and
          updates and upgrades that replace or supplement the application and are not distributed
          with a separate license (together, the "Application"). This Application is licensed to you
          free of charge. You do not own the Application.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Checkbox name="agree" label="Agree" />
          <AgreementSubmitButton />
        </div>
      </div>
    </div>
  )
}

export default LicenseAgreement
