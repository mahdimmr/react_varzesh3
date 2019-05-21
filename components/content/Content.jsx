import React, { Component } from "react";
import "./style.css";

export default class Content extends Component {
  render() {
    return (
      <>
        <div class="center-container page-content-two-column search-page page-content-bg">
          <div class="complete-search-bar">
            <input
              type="text"
              placeholder="لطفا عبارتی برای جستجو وارد نمایید"
              maxlength="50"
              value="cc"
            />

            <input type="button" value="جستجو" />

            <div class="autocomplete-wrapper" />

            <div class="search-filter-container visible-print">
              <div class="date from">
                از تاریخ<label />
              </div>

              <div class="date to">
                تا تاریخ<label />
              </div>

              <div class="remove-filters" title="حذف فیلتر">
                x
              </div>
            </div>
          </div>

          <div class="content-area">
            <div id="anc">
              <div id="anc-op" class="news-text-wrapper" />
              <div class="cat-tag-title">
                نتایج جستجو در اخبار برای '<span id="searched-term">cc</span>
              </div>
              <div
                class="complete-search-result-wrapper news-section"
                style={{ "min-height": "300px" }}
              >
                <ul class="cat-list">
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1612481" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01406215.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1612481" target="_blank">
                          گواردیولا: فتح سه جام سخت‌تر از قهرمانی CL بود
                        </a>
                        <span class="cat-time">1398/02/29</span>
                      </h3>
                      <p class="cat-text">
                        &#xA0;پپ گواردیولا، سرمربی منچسترسیتی بعد از قهرمانی
                        دیروز تیمش در جام حذفی انگلیس گفت فتح هر سه جام فوتبال
                        انگلیس در این فصل دشوارتر از قهرمانی در CL بوده ولی برای
                        سیتی قابل تکرار است.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1612123" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01393098.JPG" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1612123" target="_blank">
                          فینال تمام‌انگلیسی CL برای تیم ملی چالش است
                        </a>
                        <span class="cat-time">1398/02/27</span>
                      </h3>
                      <p class="cat-text">
                        گرت ساوت‌گیت، سرمربی تیم ملی انگلیس می‌گوید فینال تمام
                        انگلیسی لیگ قهرمانان اروپا برای تیم ملی این کشور در لیگ
                        ملتهای یوفا چالش منحصربفردی ایجاد خواهد کرد.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1538131" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01148054.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1538131" target="_blank">
                          گانز اند روزز برای فینال می‌خواند
                        </a>
                        <span class="cat-time">1397/04/22</span>
                      </h3>
                      <p class="cat-text">
                        گروه مشهور راک گانز اند روزز در مراسم افتتاحیه فینال
                        مسابقات جام جهانی در مسکو خواهد خواند.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1612272" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01384630.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1612272" target="_blank">
                          رئیس یوفا: تغییرات CL به فوتبال اروپا ضربه نمی‌زند
                        </a>
                        <span class="cat-time">1398/02/28</span>
                      </h3>
                      <p class="cat-text">
                        الکساندر چفرین، رئیس یوفا می‌گوید تغییرات در نظر گرفته
                        شده برای چمپیونزلیگ تاثیری بر بازی‌های لیگ‌های داخلی
                        فدراسیون‌های عضو یوفا ندارد.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/35352" target="_blank">
                        <div class="cat-thumb-not-available" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/35352" target="_blank">
                          هیجان فراوان هواداران هندی در ورزشگاه دوحه(عکس)
                        </a>
                        <span class="cat-time">1389/10/24</span>
                      </h3>
                      <p class="cat-text" />
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1611976" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01390838.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1611976" target="_blank">
                          مخالفت اتحادیه لیگ‌های اروپایی با تغییرات پیشنهادی CL
                        </a>
                        <span class="cat-time">1398/02/26</span>
                      </h3>
                      <p class="cat-text">
                        اتحادیه لیگ های اروپایی اعلام کرد که برنامه تغییر ساختار
                        لیگ قهرمانان باید از ابتدا مورد بررسی قرار بگیرد زیرا
                        پیشنهادهای فعلی را تنها به سود تعدادی از باشگاهی های
                        متمول می داند.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1607156" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01399235.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1607156" target="_blank">
                          امری: هنوز به کسب سهمیه CL امیدواریم
                        </a>
                        <span class="cat-time">1398/02/05</span>
                      </h3>
                      <p class="cat-text">
                        آرسنال دیشب در خانه ولوز با نتیجه 3-1 شکست خورد تا ضربه
                        سختی به شانس این تیم برای کسب سهمیه چمپیونزلیگ وارد شود
                        ولی امری در پایان بازی گفت همچنان به کسب سهمیه امیدوار
                        است.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1608507" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01402252.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1608507" target="_blank">
                          داوید نرس: باورم نمی‌شود در نیمه‌نهایی CL هستم
                        </a>
                        <span class="cat-time">1398/02/11</span>
                      </h3>
                      <p class="cat-text">
                        داوید نرس، مهاجم ملی‌پوش برزیلی آژاکس با وجود پیروزی
                        دیروز تیمش مقابل تاتنهام می‌گوید هنوز نمی‌تواند باور کند
                        که در نیمه‌نهایی چمپیونزلیگ بازی می‌کند و امیدوار است
                        تیمش به فینال راه یابد.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1607814" target="_blank">
                        <div class="cat-thumb-not-available" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1607814" target="_blank">
                          طعنه جالب اینتری ها به حذف یووه از CL (عکس)
                        </a>
                        <span class="cat-time">1398/02/08</span>
                      </h3>
                      <p class="cat-text">
                        طرفداران اینتر با ابتکاری جالب، به حذف یوونتوس از لیگ
                        قهرمانان اروپا واکنش نشان دادند.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1606104" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01399002.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1606104" target="_blank">
                          امیدواری گواردیولا به موفقیت همکار سابقش در CL
                        </a>
                        <span class="cat-time">1398/01/31</span>
                      </h3>
                      <p class="cat-text">
                        پپ گواردیولا، سرمربی منچسترسیتی، علی رغم حذف تیمش از
                        رقابت های چمپیونزلیگ، اعلام کرد به دلیل حضور آژاکس با
                        هدایت اریک تن هاگ در نیمه نهایی، ادامه رقابت ها را دنبال
                        می کند.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1605167" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01398381.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1605167" target="_blank">
                          برتری رونالدو نسبت به مسی در مراحل حذفی CL
                        </a>
                        <span class="cat-time">1398/01/27</span>
                      </h3>
                      <p class="cat-text">
                        کریستیانو رونالدو علاوه بر اینکه در تاریخ چمپیونزلیگ
                        بیشتر از هر فوتبالیست دیگری گل زده، در مراحل حذفی این
                        رقابت هم تعداد گلهایش از همه و از جمله از رقیب بزرگش
                        لیونل مسی به مراتب بیشتر است.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1289778" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/00034038.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1289778" target="_blank">
                          پورحیدری در CCU
                        </a>
                        <span class="cat-time">1394/09/25</span>
                      </h3>
                      <p class="cat-text">
                        منصور پورحیدری سرپرست استقلال به دلیل قند بالا در بخش
                        CCU بیمارستان ایران مهر بستری شد.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1315369" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01097697.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1315369" target="_blank">
                          زلاتان به دنبال قهرمانی در CL است
                        </a>
                        <span class="cat-time">1395/01/18</span>
                      </h3>
                      <p class="cat-text">
                        مدیر برنامه های ستاره سوئدی پی اس جی می گوید این بازیکن
                        همچنان امیدوار به فتح لیگ قهرمانان اروپا است.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1262993" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01037541.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1262993" target="_blank">
                          رونالدو:هدف رئال قهرمانی در CL است
                        </a>
                        <span class="cat-time">1394/06/05</span>
                      </h3>
                      <p class="cat-text">
                        کریس رونالدو، ستاره رئال مادرید، معتقد است تیمش در مرحله
                        گروهی چمپیونزلیگ، در گروه دشواری ‏قرار گرفته ما تاکید
                        کرد هدف رئال، قهرمانی در این رقابت هاست.‏
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1256924" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01034475.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1256924" target="_blank">
                          ویدال:برای قهرمانی در CL به بایرن آمده ام
                        </a>
                        <span class="cat-time">1394/05/11</span>
                      </h3>
                      <p class="cat-text">
                        آرتورو ویدال، ستاره جدید بایرن مونیخ، اعلام کرد احتمال
                        قهرمانی با باواریایی ها در چمپیونزلیگ، دلیل ‏جدایی اش از
                        یوونتوس بوده است.‏
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1287922" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01041998.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1287922" target="_blank">
                          منچستریونایتد از CL حذف می شود؟
                        </a>
                        <span class="cat-time">1394/09/17</span>
                      </h3>
                      <p class="cat-text">
                        دیدارهای مرحله گروهی لیگ قهرمانان اروپا در گروه های اول
                        تا چهارم به پایان می رسد و تکلیف ‏صعود تیم ها به طور
                        کامل مشخص خواهد شد.‏
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1599132" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01390975.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1599132" target="_blank">
                          پپ: بدون قهرمانی CL همه موفقیت‌ها بی‌فایده است
                        </a>
                        <span class="cat-time">1397/12/25</span>
                      </h3>
                      <p class="cat-text">
                        پپ گواردیولا اعتراف کرد که اگر نتواند با منچسترسیتی، جام
                        قهرمانی لیگ قهرمانان اروپا را فتح کند کارنامه‌اش در این
                        باشگاه انگلیسی به عنوان کارنامه‌ای ناموفق ارزیابی خواهد
                        شد.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1403148" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01187299.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1403148" target="_blank">
                          شاید لستر سورپرایز امسال CL باشد
                        </a>
                        <span class="cat-time">1395/12/25</span>
                      </h3>
                      <p class="cat-text">
                        کریگ شکسپیر، سرمربی لسترسیتی مدعی شد که شاید آنها
                        سورپرایز امسال چمپیونزلیگ باشند.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1329789" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01114731.jpg" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1329789" target="_blank">
                          رونالدو بهترین بازیکن CL شد
                        </a>
                        <span class="cat-time">1395/03/10</span>
                      </h3>
                      <p class="cat-text">
                        فوق ستاره پرتغالی رئال مادرید توانست جایزه بهترین بازیکن
                        رقابت های لیگ قهرمانان اروپا را از دیدگاه 2 رسانه مطرح
                        اسپانیایی و ایتالیایی را کسب کند.
                      </p>
                    </div>
                  </li>
                  <li class="cat-item">
                    <div class="cat-right">
                      <a href="/news/1321518" target="_blank">
                        <img src="https://static.farakav.com/files/pictures/thumb/01103643.gif" />
                      </a>
                    </div>
                    <div class="cat-left">
                      <h3>
                        <a href="/news/1321518" target="_blank">
                          تورس:قهرمانی با اتلتیکو در CL رویایی است
                        </a>
                        <span class="cat-time">1395/02/10</span>
                      </h3>
                      <p class="cat-text">
                        فرناندو تورس، مهاجم باتجربه اتلتیکو مادرید، معتقد است
                        قهرمانی احتمالی با این تیم در چمپیونزلیگ، ‏بزرگترین
                        دستاورد دوران حرفه ای اش خواهد بود.‏
                      </p>
                    </div>
                  </li>
                </ul>
                <button class="load-more-news">بیشتر...</button>
              </div>
            </div>
          </div>
          <div class="sidebar">
            <div class="complete-search-result-wrapper tags-section">
              <h2 class="sidebar--head">برچسب</h2>
              <div class="tags-list">
                <ul>
                  <li>
                    <a href="/tag/906219" target="_blank" title="ویکتور موزز">
                      ویکتور موزز
                    </a>
                  </li>
                  <li>
                    <a href="/tag/927090" target="_blank" title="پل گاسکوئین">
                      پل گاسکوئین
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tag/906426"
                      target="_blank"
                      title="آرمین فه (سرمربی)"
                    >
                      آرمین فه (سرمربی)
                    </a>
                  </li>
                  <li>
                    <a href="/tag/906416" target="_blank" title="سن‌آتین">
                      سن‌آتین
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tag/906406"
                      target="_blank"
                      title="دلشاد نور علی یف (سرمربی)"
                    >
                      دلشاد نور علی یف (سرمربی)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tag/906822"
                      target="_blank"
                      title="چو یونگ سو (سرمربی)"
                    >
                      چو یونگ سو (سرمربی)
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tag/906762"
                      target="_blank"
                      title="شیخ سلمان بن ابراهیم"
                    >
                      شیخ سلمان بن ابراهیم
                    </a>
                  </li>
                  <li>
                    <a href="/tag/906510" target="_blank" title="پل پوگبا">
                      پل پوگبا
                    </a>
                  </li>
                  <li>
                    <a href="/tag/906488" target="_blank" title="رن">
                      رن
                    </a>
                  </li>
                  <li>
                    <a href="/tag/906483" target="_blank" title="نولان رو">
                      نولان رو
                    </a>
                  </li>
                  <li>
                    <a href="/tag/905781" target="_blank" title="پی سی وی">
                      پی سی وی
                    </a>
                  </li>
                  <li>
                    <a href="/tag/5501" target="_blank" title="پل اینس">
                      پل اینس
                    </a>
                  </li>
                  <li>
                    <a href="/tag/905946" target="_blank" title="مک‌کلین">
                      مک‌کلین
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tag/906000"
                      target="_blank"
                      title="آندره‌آ بارزالی"
                    >
                      آندره‌آ بارزالی
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tag/905998"
                      target="_blank"
                      title="دیه گو جفرسون ملو"
                    >
                      دیه گو جفرسون ملو
                    </a>
                  </li>
                  <li>
                    <a href="/tag/905976" target="_blank" title="بن‌عرفا">
                      بن‌عرفا
                    </a>
                  </li>
                  <li>
                    <a href="/tag/5172" target="_blank" title="زی روبرتو">
                      زی روبرتو
                    </a>
                  </li>
                  <li>
                    <a href="/tag/4894" target="_blank" title="دیوید دو گی">
                      دیوید دو گی
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tag/4850"
                      target="_blank"
                      title="پل لوگوئن(سرمربی)"
                    >
                      پل لوگوئن(سرمربی)
                    </a>
                  </li>
                  <li>
                    <a href="/tag/4832" target="_blank" title="ال نهنه">
                      ال نهنه
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="complete-search-result-wrapper videos-section">
              <h2 class="sidebar--head">ویدیو</h2>
              <ul class="clr">
                <li>
                  <a
                    href="https://video.varzesh3.com/video/185902"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01379436.jpg" />
                        <div class="datetime">1397-11-26 22:24:00</div>
                      </div>
                      <div class="title">
                        کارشناسی داوری بازی های امروز لیگ برتر فوتبال
                        ایران(26-11-97)
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://video.varzesh3.com/video/185849"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01382171.jpg" />
                        <div class="datetime">1397-11-26 16:25:00</div>
                      </div>
                      <div class="title">10 استادیوم بزرگ شهر لندن</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://video.varzesh3.com/video/185843"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01369324.jpg" />
                        <div class="datetime">1397-11-26 16:00:00</div>
                      </div>
                      <div class="title">
                        5حرکت برتر NBA در شب گذشته ( 26-11-97)
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://video.varzesh3.com/video/185836"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01350545.jpg" />
                        <div class="datetime">1397-11-26 01:42:00</div>
                      </div>
                      <div class="title">خارج از دید هفته (25-11-97)</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://video.varzesh3.com/video/185604"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01243486.jpg" />
                        <div class="datetime">1397-11-22 23:10:00</div>
                      </div>
                      <div class="title">نود درجه (22-11-97)</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://video.varzesh3.com/video/185580"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01367737.jpg" />
                        <div class="datetime">1397-11-22 15:48:00</div>
                      </div>
                      <div class="title">
                        10 حرکت برتر لیگ NBA در شب گذشته (22-11-97)
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://video.varzesh3.com/video/185926"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01382525.jpg" />
                        <div class="datetime">1397-11-27 12:22:00</div>
                      </div>
                      <div class="title">
                        برترین بازیکنان هفته 26 لیگ جزیره از نگاه فوتبال فانتزی
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://video.varzesh3.com/video/184990"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01378493.jpg" />
                        <div class="datetime">1397-11-13 17:13:00</div>
                      </div>
                      <div class="title">
                        به مناسبت سالروز تولد 30 سالگی ایوان پریشیچ
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://video.varzesh3.com/video/184902"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01378203.jpg" />
                        <div class="datetime">1397-11-12 01:50:00</div>
                      </div>
                      <div class="title">
                        شروع تمرینات هفتگی یوونتوس (11-11-97)
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://video.varzesh3.com/video/185244"
                    target="_blank"
                    class="clr is-block"
                  >
                    <div class="search-video-box">
                      <div class="image-holder">
                        <img src="https://static.farakav.com/files/pictures/thumb/01379569.jpg" />
                        <div class="datetime">1397-11-17 15:35:00</div>
                      </div>
                      <div class="title">تمرین امروز پاریسی‌ها (17-11-97)</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div class="complete-search-result-wrapper lenz-section">
              <h2 class="sidebar--head">تصاویر ستارگان</h2>
              <ul>
                <li>
                  <a href="http://lenz.varzesh3.com/m/p/146248" target="_blank">
                    <img src="https://static.farakav.com/files/insta/juanmatagarcia_1997965546825729271.jpg" />
                  </a>
                </li>
                <li>
                  <a href="http://lenz.varzesh3.com/m/p/13749" target="_blank">
                    <img src="https://static.farakav.com/files/insta/mcfcofficial_1004918671309269502_5880761.jpg" />
                  </a>
                </li>
                <li>
                  <a href="http://lenz.varzesh3.com/m/p/147122" target="_blank">
                    <img src="https://static.farakav.com/files/insta/lacazettealex_2005990528323361154.jpg" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="clr" />
        </div>
        </>
    );
  }
}
