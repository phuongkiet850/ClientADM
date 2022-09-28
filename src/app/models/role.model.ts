export interface RoleModel {
  Id: number
  Name: string
  Description: string
  IsDelete: boolean

}

export enum RoleTitle {
  'Quản lý cục bộ',
  'Quản lý',
  'Khách hàng',
  'Nhân viên bán hàng',
  'Hướng dẫn viên',
  'Tài xế'
}

// enum ApprovalStatus {
//   draft,
//   submitted,
//   approved,
//   rejected
// };

// const request =  {
//   id: 1,
//   status: ApprovalStatus.approved,
//   description: 'Please approve this request'
// };

// if(request.status === ApprovalStatus.approved) {
//   // send an email
//   console.log(request);

//   console.log('Send email to the Applicant...');
// }
