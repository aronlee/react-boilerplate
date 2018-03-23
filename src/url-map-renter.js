var mapLanlord = {
  /**
   * @name 发房额度
   * @desc
   */
  publishQuotaUrl: '/disH5/h5/mine/publish-limits',
  /**
   * @name 创建账单
   * @desc 其中‘:contractId’是放合同id
   */
  addRentBillUrl: '/disH5/h5/bills/create/:contractId',
  /**
   * @name 生成租金账单
   * @desc 其中‘:contractId’是放合同id
   */
  setBillPaidUrl: '/disH5/h5/bills/contract/:contractId',
  /**
   * @name 银行列表
   * @desc
   */
  bankList: '/disH5/h5/bank-list',
  /**
   * @name 初始化锁密码
   * @desc 其中 doorType: 门锁类型：1、大门；2、内门。 doorId: 门锁ID
   */
  initLockPwd: '/disH5/h5/locks/init-pwd/:doorType/:doorId',
  /**
   * @name 修改锁密码
   * @desc 其中 doorType: 门锁类型：1、大门；2、内门。 doorId: 门锁ID
   */
  setLockPwd: '/disH5/h5/locks/set-pwd/:doorType/:doorId',
  /**
   * @name 智能锁管理
   * @desc 其中 doorType: 门锁类型：1、大门；2、内门。 doorId: 门锁ID
   */
  lockManage: '/disH5/h5/locks/manage/:doorType/:doorId',
  /**
   * @name 交易列表
   */
  payList: '/disH5/h5/pays/list',
  /**
   * @name 交易详情
   * @desc 其中 bizType:业务类型(PAY_INTO:提现 OUT：支付) orderNo:交易号
   */
  payDetail: '/disH5/h5/pays/detail/:bizType/:orderNo',
  /**
   * @name 支付详情
   * @desc 其中 tradeLogId:支付记录id
   */
  paySucDetail: '/disH5/h5/pays/detail/:tradeLogId',
  /**
   * @name 电子合同
   * @desc 其中‘:contractId’是放合同id
   */
  contractView: '/disH5/h5/contract/view/:contractId',
  /**
   * @name 开门记录
   * @desc 其中 doorType: 门锁类型：1、大门；2、内门  doorId: 门锁ID
   */
  unlockHistories: '/disH5/h5/locks/unlock-histories/:doorType/:doorId',
  /**
   * @name 解约合同详情
   * @desc 其中 contractId 是合同id
   */
  contractTerminate: '/disH5/h5/contract/terminate/:contractId',
  /**
   * @name 退租申请记录
   * @desc 其中 contractId 是合同id
   */
  unrents: '/disH5/h5/contract/unrents/:contractId',
  /**
   * @name 账单列表
   * @desc 其中‘:contractId’是合同id，可传可不传，不传是查询所有账单
   * type： 账单类型（1：押金 2：租金 3：生活费用 4：退房结账 5:房东年付 ）
   * payStatus：支付状态（1：已收款 2：待收款 3：已支付（已还款） 4：待支付（待还款））
   * startDate：开始时间
   * endDate：结束时间
   * contractId：合同id
   */
  billList: '/disH5/h5/bills/list?contractId=1&type=1&payStatus=1&startDate=2017-1-2&endDate=2017-12-30',
  /**
   * @name 账单详情
   * @desc 其中 ‘type’是账单类型（1.普通账单 2.解约账单） ‘:billId’是账单id
   */
  billDetail: '/disH5/h5/bills/detail/:type/:billId',
  /**
   * @name 房东年付入口页
   * @desc
   */
  fdnfList: '/disH5/h5/annual/landlord',
  /**
   * @name 房东年付订单详情
   * @desc 其中 landlordId 订单Id
   */
  fdnfDetail: '/disH5/h5/annual/landlord/detail/:landlordId',
  /**
   * @name 微信下载引导页(租客端)
   * @desc
   */
  weixinDownloadApp: '/disH5/h5/web/download/app/ylzk',
}

export default mapLanlord
