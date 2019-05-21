import React, { Component } from 'react';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <header class="page-header hidden-xs is-event">
          <div class="page-header--tiny-bar">
              <div class="center-container">
                      <ul class="menu bordered">
                              <li class="">
                                  <a class="clr" target="_blank" href="http://fantasy.varzesh3.com">تیم فانتزی</a>
                              </li>
                              <li class="">
                                  <a class="clr" target="_blank" href="http://video.varzesh3.com">ویدئو</a>
                              </li>
                              <li class="">
                                  <a class="clr" target="_blank" href="/news/live">اخبار زنده</a>
                              </li>
                              <li class="">
                                  <a class="clr" target="_blank" href="/contact">ارتباط با ما</a>
                              </li>
                              <li class="">
                                  <a class="clr" target="_blank" href="http://charge.varzesh3.com/">کارت شارژ</a>
                              </li>
                              <li class="highlight">
                                  <a class="clr"  href="/ads">تبلیغات</a>
                              </li>
                      </ul>
                  <div class="profile pull-left text-left is-guest">
                          <a href="/login?redirect=/news/1613061/%D8%A7%D9%85%D8%A8%D8%A7%D9%BE%D9%87-%D9%85%D8%B3%DB%8C-%D8%AF%D8%B1-%D9%87%D9%85%D9%87-%DA%86%DB%8C%D8%B2-%D8%B4%D9%85%D8%A7%D8%B1%D9%87-%DB%8C%DA%A9-%D8%A7%D8%B3%D8%AA">ورود <i class="varzesh3-icon-login"></i></a>
                  </div>  
                  <div class="page-header--datetime pull-left">
                      <div class="pull-left page-header--datetime--time">
                          <i class="varzesh3-icon-time"></i>
                          <span>21:13</span>
                      </div>
                      <div class="pull-left page-header--datetime--date">
                          <i class="varzesh3-icon-calendar"></i>
                          <span>سه‌شنبه 31 اردیبهشت</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="page-header--middle-row">
              <div class="center-container" >
                  <div class="page-logo pull-right">
                      <a href="http://www.varzesh3.com">
                          <img border="0" src="https://static.farakav.com/v3sl/v0.0.85-hippo/img/identity/varzesh3-logo.png" width="141" height="66" alt="لوگو ورزش سه" />
                      </a>
                  </div>
                  <div class="pull-left ads-block">
                              <div class="ad-container row-fluid" data-adposition="1"></div>          
                  </div>
              </div>
          </div>
          <div class="color-bar">
              <div class="color-bar--item red"></div>
              <div class="color-bar--item yellow"></div>
              <div class="color-bar--item blue"></div>
              <div class="color-bar--item green"></div>
              <div class="color-bar--item gray"></div>
          </div>
          <div class="clear"></div>
          <div class="page-header--main-menu">
              <div class="overflow-visible center-container">
                  <nav role="navigation">
                          <ul class="menu reverse pull-right">
                                  <li >
                                      <a title="صفحه اصلی" href="/" >
                                          صفحه اصلی
                                      </a>
                                  </li>
                                  <li >
                                      <a title="جداول لیگ‌ها " href="/table" >
                                          جداول لیگ‌ها 
                                      </a>
                                  </li>
                                  <li >
                                      <a title="روزنامه" href="/newspaper" >
                                          روزنامه
                                      </a>
                                  </li>
                                  <li >
                                      <a title="ویدئو" href="https://video.varzesh3.com" target="_blank">
                                          ویدئو
                                      </a>
                                  </li>
                                  <li >
                                      <a title="جام حذفی" href="/playoff" target="_blank">
                                          جام حذفی
                                      </a>
                                  </li>
                                  <li >
                                      <a title="تصاویر بازیکنان" href="http://lenz.varzesh3.com" target="_blank">
                                          تصاویر بازیکنان
                                      </a>
                                  </li>
                                  <li class="highlight">
                                      <a title="پخش زنده" href="https://www.anten.ir" target="_blank">
                                          پخش زنده
                                      </a>
                                  </li>
                                  <li >
                                      <a title="نتایج زنده" href="/livescore" >
                                          نتایج زنده
                                              <span class="live blink"></span>
                                      </a>
                                  </li>
                          </ul>
                  </nav>  
                      <div class="page-search pull-left">
                          <input type="text"
                                 placeholder="جستجوی اخبار، تیم ها، بازیکنان و ویدیوهای ورزشی..."
                                 id="searchKey"
                                 name="searchKey" />
                          <button><i class="varzesh3-icon-magnifying-glass"></i></button>
                          <div class="page-search--result-box hidden"></div>
                      </div>
              </div>
          </div>
      </header>
    )
  }
}
