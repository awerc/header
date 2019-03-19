import cn from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Dropdown from './Dropdown';

import Logo from './Logo';
import NavbarToggle from './NavbarToggleButton';
import ProfileIcon from './ProfileIcon';
import PowerIcon from './PowerIcon';
import GraduationIcon from './GraduationIcon';

const MENU_ITEMS = [
  {
    name: 'Новости',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/NewNews',
  },
  {
    name: 'Заявки',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/Requests.aspx',
  },
  {
    name: 'Абоненты',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/Abonents',
  },
  {
    name: 'Клиенты',
    submenu: [
      {
        name: 'Абоненты (Старая версия)',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/AbonentModule.aspx',
      },
      {
        name: 'Работа с продлениями',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/WorkWithExt',
      },
      {
        name: 'ОФД подключение',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/OfdConnection',
      },
      {
        name: 'Отзыв сертификатов',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/CertificateRevoke',
      },
      {
        name: 'Распределение',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Distribution.aspx',
      },
      {
        name: 'Потенциальные клиенты',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/PotentialAbonentCrm',
      },
      {
        name: 'Лицензии на 1С:НП8',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/TaxRepresentative.aspx',
      },
    ],
  },
  {
    name: 'Аналитика',
    submenu: [
      {
        name: 'Отчетность',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/ReportModule',
      },
      {
        name: 'Тарифный калькулятор',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/TariffCalc',
      },
      {
        name: 'Проверки',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Verify',
      },
      {
        name: 'Статистика',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/StatisticsModule.aspx',
      },
    ],
  },
  {
    name: 'Финансы',
    submenu: [
      {
        name: 'Счета',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Billing',
      },
      {
        name: 'Сверка 1С-Отчетность',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Balance.aspx',
      },
      {
        name: 'Сверка АО',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/Balance',
      },
      {
        name: 'Сверка 1С-ЭТП/Астрал-ЭТ',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/BalanceEtp',
      },
      {
        name: 'Сверка ОФД',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/BalanceOfd',
      },
    ],
  },
  {
    name: 'Заказы',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/Order',
  },
  {
    name: 'Документация',
    link: 'http://reg.test.keydisk.ru/PreReleaseNew/Documentation',
  },
  {
    name: 'Управление',
    submenu: [
      {
        name: 'Администрирование',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/AdminModule',
      },
      {
        name: 'Администрирование прайсов',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/PriceAdmin',
      },
      {
        name: 'Центры идентификации',
        link: '/IdentificationCenters',
      },
      {
        name: 'Мониторинг',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/MonitoringMVC',
      },
      {
        name: 'Перенос',
        link: 'http://reg.test.keydisk.ru/PreReleaseNew/AbonentTransfer',
      },
    ],
  },
];

class NavigationBar extends Component {
  state = { show: false };

  handleNavbarToggle = () => this.setState(prevState => ({ show: !prevState.show }));

  render() {
    const {
      location: { pathname },
    } = this.props;
    const { show } = this.state;

    return (
      <div className={cn('navbar navbar-expand-xl', { show })}>
        <div className="header">
          <a className="navbar-brand" href="/">
            <Logo />
            <span className="brand-title">Web - Регистратор</span>
          </a>
          <NavbarToggle onClick={this.handleNavbarToggle} />
        </div>
        <div className={cn('navbar-collapse collapse', { show })}>
          <div className="nav-menu">
            {MENU_ITEMS.map(({ name, link, submenu }, index) =>
              submenu ? (
                <Dropdown
                  key={index}
                  title={name}
                  className={cn('custom-navlink', {
                    active: submenu.reduce((acum, e) => acum || e.link === pathname, false),
                  })}
                >
                  {submenu.map(({ name, link }, index) => (
                    <Dropdown.Item
                      key={index}
                      className={link === pathname && 'active'}
                      href={link}
                    >
                      {name}
                    </Dropdown.Item>
                  ))}
                </Dropdown>
              ) : (
                <a key={index} className="custom-navlink" href={link}>
                  {name}
                </a>
              )
            )}
          </div>
          <Dropdown
            className="custom-navlink profile-dropdown"
            title={
              <span className="profile-title">
                <GraduationIcon />
                Burtsev
                <span className="light-text">Вендор</span>
              </span>
            }
          >
            <Dropdown.Item href="http://reg.test.keydisk.ru/PreReleaseNew/Account/Index">
              <ProfileIcon />
              Профиль
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="http://reg.test.keydisk.ru/PreReleaseNew/Account/Index">
              <PowerIcon />
              Выйти
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>
    );
  }
}

NavigationBar.propTypes = {
  location: PropTypes.object,
};

export default withRouter(NavigationBar);
