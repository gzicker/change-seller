import type { FC } from 'react'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Layout, PageBlock, PageHeader } from 'vtex.styleguide'

import useValidateOwner from '../hooks/useValidateOwner'
import SelectOrder from './SelectOrder'

const queryClient = new QueryClient()

const ChangeSeller: FC = () => {
  const { owner, message } = useValidateOwner()

  return (
    <Layout
      pageHeader={
        <PageHeader
          title={<FormattedMessage id="change-seller.navigation.label-table" />}
        />
      }
    >
      {owner ? (
        <PageBlock variation="full">
          <QueryClientProvider client={queryClient}>
            <SelectOrder />
          </QueryClientProvider>
        </PageBlock>
      ) : (
        <div className="flex vh-100 items-center justify-center">
          <h5 className="t-heading-5">{message}</h5>
        </div>
      )}
    </Layout>
  )
}

export default ChangeSeller
