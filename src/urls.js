const urls = [
  {
    name: '发房额度',
    field: 'publishQuotaUrl',
    path: '/disH5/h5/mine/publish-limits',
    desc: '',
  },
  {
    name: '创建账单',
    field: 'addRentBillUrl',
    path: '/disH5/h5/bills/create/:contractId',
    desc: '其中‘:contractId’是放合同id',
  },
  {
    name: '生成租金账单',
    field: 'setBillPaidUrl',
    path: '/disH5/h5/bills/contract/:contractId',
    desc: '其中‘:contractId’是放合同id',
  },
]

export default urls
