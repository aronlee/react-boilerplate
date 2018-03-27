var mapRenter = {
  /**
   * @name 账单详情
   * @desc
   */
  rentBillDetailUrl: '/disH5/h5/2c/bills/detail/:billId',
  /**
   * @name 初始化锁密码
   * @desc 其中 doorType: 门锁类型：1、大门；2、内门。 doorId: 门锁ID
   */
  initLockPwd: '/disH5/h5/2c/locks/init-pwd/:doorType/:doorId',
  /**
   * @name 修改锁密码
   * @desc 其中 doorType: 门锁类型：1、大门；2、内门。 doorId: 门锁ID
   */
  setLockPwd: '/disH5/h5/2c/locks/set-pwd/:doorType/:doorId',
  /**
   * @name 智能锁管理
   * @desc 其中 houseId: 房屋id。
   */
  lockManage: '/disH5/h5/2c/locks/manage/:houseId',
  /**
   * @name 交易列表
   * @desc
   */
  payList: '/disH5/h5/2c/pays/list',
  /**
   * @name 交易详情
   * @desc 其中 bizType:业务类型 orderNo:交易号
   */
  payDetail: '/disH5/h5/2c/pays/detail/:bizType/:orderNo',
  /**
   * @name 电子合同
   * @desc 其中 contractId 是合同id
   */
  contractView: '/disH5/h5/2c/contract/view/:contractId',
  /**
   * @name 开门记录页面
   * @desc 其中 doorType: 门锁类型：1、大门；2、内门。 doorId: 门锁ID
   */
  openLockHistoryUrl: '/disH5/h5/2c/locks/unlock-histories/:doorType/:doorId',
  /**
   * @name 待确认合同页
   * @desc  contractId 合同id
   */
  confirmContractUrl: '/disH5/h5/2c/contract/confirm/:contractId',
  /**
   * @name 待确认解约合同页
   * @desc  contractId 合同id
   */
  releaseContractUrl: '/disH5/h5/2c/contract/terminate/:contractId	',
  /**
   * @name 房源详情
   * @desc id：房源id
   */
  houseDetailUrl: '/disH5/h5/house/detail/:id',
  /**
   * @name 银行列表
   */
  bankList: '/disH5/h5/2c/bank-list',
  /**
   * @name 房源详情
   * @desc id：房源id
   */
  houseDetailUrlV1_3: '/disH5/h5/2c/house/detail/:id',
  /**
   * @name 门锁报修页
   * @desc lockId：门锁ID， 注意这里参数是query形式
   * @host
   */
  lockFix: '/disH5/h5/help/lock/fix?lockId=1',
  /**
   * @name 门锁报修页
   * @desc lockId：门锁ID， 注意这里参数是query形式
   */
  lockFixV1_3: '/disH5/h5/web/help/lock/fix?lockId=1',
  /**
   * @name 门锁报修如何检查页
   * @desc
   */
  lockFix2: '/disH5/h5/web/help/lock/fix/2',
  /**
   * @name 房源分享
   * @desc id：房源id
   */
  houseDetailShare: '/disH5/h5/house/detail/:id',
  /**
   * @name 房源分享
   * @desc id：房源id
   */
  houseDetailShareV1_3: '/disH5/h5/web/house/detail/:id',
}

export default mapRenter
