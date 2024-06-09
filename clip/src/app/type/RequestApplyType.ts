type RequestApplyType = {
  postId: number;
  scheduleId: number;
  date: {
    date: string;
  };
  announcementReservationImages: string[] | File[];
};

export default RequestApplyType;
