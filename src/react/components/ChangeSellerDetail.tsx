import type { FC } from 'react'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'

import useValidateOwner from '../hooks/useValidateOwner'
import OrderDetails from './OrderDetails'

const ChangeSellerDetail: FC = () => {
  const { owner, message } = useValidateOwner()

  return (
    <Layout
      fullWidth
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="change-seller.navigation.label-table" />}
        />
      }
    >
      {owner ? (
        <PageBlock variation="full">
          <OrderDetails />
        </PageBlock>
      ) : (
        <div className="flex vh-100 items-center justify-center">
          <h5 className="t-heading-5">{message}</h5>
        </div>
      )}
    </Layout>
  )
}

export default ChangeSellerDetail
