// placeOrder
// prepare order
// pickupOrder
// deliverOrder

const orderDetails = {
  orderId: 1234,
  food: ["Paneer Patiyala", "Naan", "Coke"],
  price: 750,
  paymentStatus: false,
  tokenAssign: false,
  restuarantLocation: "Kharghar",
  customerLocation: "Panvel",
  orderPicked: false,
  orderDelivered: true,
};

function placeOrder(orderDetails) {
  console.log(`Payment of ${orderDetails.price} rs is in process`);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Payment is completed");
      orderDetails.paymentStatus = true;
      resolve(orderDetails);
    }, 1000);
  });
}

function prepareOrder(orderDetails) {
  console.log(
    `Resturant received the order  for id - ${orderDetails.orderId} and preparing it`,
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Your order for ${orderDetails.food} is prepared now`);
      orderDetails.tokenAssign = 42932;
      resolve(orderDetails);
    }, 1000);
  });
}

function pickupOrder(orderDetails) {
  console.log(
    `Delivery boy is on the way to pickup order from ${orderDetails.restuarantLocation}`,
  );

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Delivery boy reached the resturant");
      orderDetails.orderPicked = true;
      resolve(orderDetails);
    }, 1000);
  });
}

function deliverOrder(orderDetails) {
  console.log("Delivery boy picked the order from the resturant");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(
        `Delivery boy delivered the order to customer at ${orderDetails.customerLocation}`,
      );
      orderDetails.deliverOrder = true;
      resolve(orderDetails);
    }, 1000);
  });
}


async function order(){
    const p1 = await placeOrder(orderDetails);
    const p2 = await prepareOrder(p1);
    const p3 = await pickupOrder(p2);
    const p4 = await deliverOrder(p3);

    console.log(p4)
}


order()