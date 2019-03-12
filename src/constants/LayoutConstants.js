export const MENU_ITEMS = [
  {
    name: 'Новости',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/NewNews'
  },
  {
    name: 'Заявки',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/Requests.aspx'
  },
  {
    name: 'Абоненты',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/Abonents'
  },
  {
    name: 'Клиенты',
    submenu: [
      {
        name: 'Абоненты (Старая версия)',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/AbonentModule.aspx'
      },
      {
        name: 'Работа с продлениями',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/WorkWithExt'
      },
      {
        name: 'ОФД подключение',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/OfdConnection'
      },
      {
        name: 'Отзыв сертификатов',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/CertificateRevoke'
      },
      {
        name: 'Распределение',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Distribution.aspx'
      },
      {
        name: 'Потенциальные клиенты',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/PotentialAbonentCrm'
      },
      {
        name: 'Лицензии на 1С:НП8',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/TaxRepresentative.aspx'
      },
    ]
  },
  {
    name: 'Аналитика',
    submenu: [
      {
        name: 'Отчетность',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/ReportModule'
      },
      {
        name: 'Тарифный калькулятор',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/TariffCalc'
      },
      {
        name: 'Проверки',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Verify'
      },
      {
        name: 'Статистика',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/StatisticsModule.aspx'
      },
    ]
  },
  {
    name: 'Финансы',
    submenu: [
      {
        name: 'Счета',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Billing'
      },
      {
        name: 'Сверка 1С-Отчетность',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Balance.aspx'
      },
      {
        name: 'Сверка АО',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Balance'
      },
      {
        name: 'Сверка 1С-ЭТП/Астрал-ЭТ',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/BalanceEtp'
      },
      {
        name: 'Сверка ОФД',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/BalanceOfd'
      },
    ]
  },
  {
    name: 'Заказы',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/Order'
  },
  {
    name: 'Документация',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/Documentation'
  },
  {
    name: 'Управление',
    mod: 'active',
    submenu: [
      {
        name: 'Администрирование',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/AdminModule'
      },
      {
        name: 'Администрирование прайсов',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/PriceAdmin'
      },
      {
        name: 'Мониторинг',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/MonitoringMVC'
      },
      {
        name: 'Перенос',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/AbonentTransfer'
      },
      {
        name: 'TEST',
        link: '/qwe'
      },
    ]
  },
];
