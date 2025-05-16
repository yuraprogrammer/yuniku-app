const CurrentOrders = () => {
  return (
    <div>
      <h1>Текущие заказы</h1>
      <table>
        <thead>
          <tr>
            <th>Номер заказа</th>
            <th>Дата</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>12345</td>
            <td>2023-10-01</td>
            <td>Выполнен</td>
          </tr>
          <tr>
            <td>67890</td>
            <td>2023-10-02</td>
            <td>В процессе</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CurrentOrders;