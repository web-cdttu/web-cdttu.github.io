import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/service/news/news.service';
import { SettingsService } from 'src/app/shared/service/settings/settings.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewChecked {
  bannerData = <any>[]
  homeSettingsData = <any>[]
  isActiveNews = false;

  constructor(
    private newsService: NewsService,
    private cd: ChangeDetectorRef,
    private settingsService: SettingsService
  ) {

  }

  ngOnInit(): void {
    this.bannerData = [
      {
        image: 'https://lh3.googleusercontent.com/fife/ALs6j_FGTTLEjZUqeqKU0mmG8wu6Dd4eEReu6eBEdvJl8ecvIVZPeftQTlrLse7j7xcZZG0hDH_Xf4p-P_6Ov7oOwljSqwH1vk9pd2R9wRYgYOVJRnqF_XENjKNOXPvLq98L1IKRiLeA48LkG83xY1Vd56Sw4OGsqx2s8aJ2DoG1WdhxM_eY3KWYaQpb5Qzxe2KV4IC9Xz-M6eGqAlFAlsOBI852PybwdPg3ncY-tjgpTkTV_SNuO55RvgJLhPAkGyg4voZ8oD5cT0GquoXxR9AJvDHNXbxiHtTp5mxNTDiM7Xe3SFuJfJ1TZ816egLMWxudVem13VED5fmHhl66rY1Ntb15OBZgonnkvw-LQSm3kPJdJa4MRyPSNnWTy6o-LVp4aVhBjlaLSbqs66hJC0UjmXjH1XIkNn4MtAhGnOZxx0Tqb_CHAki8CByO35AOJfud9sRfR0m0oc8qD9N0a0vJfCGgz6z8T5iNQZXODOqXXuc0-Yt5J3UkG-HnKVpGWJ4gI9M0_Ddx-0KcKqIsFZYlfnqCSoLBnPA0ElYQhBA8gDKKTcpvgEK-53l438eJdQ38IFkachMYK9pnW6aDlwknkk8KhR0QZiQ423zdu6a_9HTq-vI9otOkgzveNq0vGDbfaxlr0CGrqYYzLxNnDK7Q-KcbQgPyUismF7j3brq0KxvaN1FLfAZK75evfelCxLrJSc6EpASseLc9Pad5Kh3saAhelU8iUZb1R43dOuEReXtQ6tmp6a7fXHvg3R4OQA9ozX2l_OosbiJpXFpzHe5AHZguc3vOp427KqEI4FB27FAXzjpCU9p9mzzP8CUKEOOictqKxiQtwOXoiG4-SUPAXLpoXsx1iicIo_PvqnSnJV73zyHoUdVk8F8jXnjnIReQ4l4F_yDCXXQFE4JWLhC2JS3spd_DqpWhWGTml1foJ1prQ1IAivegXQkRzz5H0thTIirW2cOL6E7X0-reAaj2ON_gfjN0BCIX0fE9kNNkUlQr6HTrKZBXjBGw6lNE3Ct6cwE0e77ggTwhTotjItAMQz-RKQwMZAF6JxRRamaIp99A-5R6rGJk2gxcF3jo7RsHL-t4iHW8vOH52zrSknT1Pk0wCqKNyN_rKMuK59ujRKrsvPOSd_Nn5yDzpBYZSM9hMHxS7r38aukor4w4YvdkFMTL0EJs6rNX6NZnPA584Fz1GULCY_BGiakrIw0dXPPxi9ahZ0j5lC9OGPGWXzXsL5EvrD6c9audnRbDN1XbKj0yb6z6OtMMl24lRfebF6fOrS3z8IQn_74OppKTH6SqYYqed35APyPPe_AZS-Lx0RfsZTgypNQ_d16dd0T1e5AT3yFu2_9frCoOUBcUr9R3N1N39sCE8t2-zfJNRTwM0GjcNepUpNI-qFZ5S9f0X2Ds0YIzImOQV_UDQs6F_wTVzYgDI4x29avRCNXFDdrHfaoKvY9rhMGewMqAOT9xP0ybMZuq5-r6Bbm0FRwPyxTuQbihS3OMOND7sboWTTxBnCkEeyqK-UqWgqtsrj3IKo3mwddK60Rmk-racTnRessDvF-aWE0q5Qfp5QhPdn3bK_A-MTN6GDjmuXnW4xS817NvyKPu3UAAV1U22Lg'
      },
      {
        image: 'https://lh3.googleusercontent.com/fife/ALs6j_HtVqMom1Jzpq7qrXVMkcKKaa4DUhN_I2zfmlgv_0HDsy8DueBqrBCFjl0Ti1Fftp15tiFWHI8F3hYhqsgSLOqZM8-nrvx9fXS97fdbyOcLG5BRzlbHl8OEOTDxZPzLDh4nEyHx3m_a8S6nKyJZhEN0G-RFW7UYB95MatfDLv6bG_44xi_A1vQ38EyM4y4Lpz5VHAqXbjdh5029LhLxI7N8rccNJIic8AQ2D5G-BXV_vACll6X5rPXDJYNuCeJ2bPKH7f1oLYNw73vAfnvvHphSXplGfHBcTZgKF4llaR52BUUY_p9UWJeRhxuF3BYtqOcpAOK1pKCOvWIX7XOtM40bjXPQkaHUE5TFm7lwfwqAcb8scTq8hKRG7oRLeW31UAtrlNPvh6wxe8bDYEj_DPJ2uDwfG8441KfpSEqJy2puLhOeq-cIF9Cc6ptpo2WN2a05ha4TuCYuiYlYrAjk0jfZ_uGV3MvREXWlvrfMRDL645K1PooPgv0EDJFE64n8iYGvNl9eWl5s-dirqGz370IsG3e9ROHwbvZ23-ME81ShH1THzCQlI-Oioz7Qx_TWSTtE3pzlP9DjrKcxYdmHPtJ_RWyG8KT9-9rM8ZNQalIDHuqzIZ9_lhDzbcbjIFbFJ0pHzH-aj33-6ARd6Ty2Fu87rdTRHfEe6vkS13cArQEU4otyDZE43lqCvMvOJM3wnhozdWWMZXI9BegIYUBTPfyI_mwCvt_2AHuXEwuRT2ew-Qbafv1_SE2GWs42A7GPNN2kAprgHvVZLZIxx2CLJg_x_F5AVlC0_qIakLpQDto-fMjAk7bDQwAjCofCXPYLvHZZE7AOhGJteIRTZ5Nko55y1uRmeFrSksCKW5ZO84cLdFZbM0T9JcMQk6-EaQ1RADBmQ9WrxbjiA_ehGnjf_PzUVrkyaEdly4dOlL9jrOMLHTYynPHwE5bL-sCQKTpOJ7hz9Wj1_2CXBvD_yzEO-H4s_Llsim3wcgC0tf6YOq68n5EpSNG1w5EqQ4lU9mCmF0_GBykyBSpJQwDdDQiNyTVhlj9uxNg_k2_wBwcv4yf4G98ddKMbqdaXLE0BbAML9Z5uCQNDGt-T3ykEyxi6HwSX7GjN8JMhN3OT6UoB377pawNtYJoHcBoSSsB85RgK3b3o5ZUHbZZ9rNKyXuJedyGni2BK5-Mbi_bTk0IR1fWgQv6V_rw_9tDRiHNMKuQx9y5CZ4ssHYOruBMkz9uQa5kpBdS3aI1yuxB5ogi8-Yj9Jp59S4I-OAS7i4yfjM6S3TW6uHSyxCZ9vh7ihRfo9s3CDnas1MnAJfB5A3oMPA-fB0DaUbT9nT9d-gbU35cgj_raiAFYlA6UTN2lLB90cYGGYK0miL-GUASWhZ9OxPnE7k4i8oaGtQ-Sm1Lopi3X1NAwi72a5igB9zPRae2NMgMI0oDv7KAl3km_Oj-_YHoRz_ZMbaa4fEf0bUD_qKTfIUhY0as1rt9sOYboMIdl8F3rdvbdLCpzfbGXnMqYSyYXsSiuXYMA6mnhcTQOrhivh7OYEDP22pM6dWdp-K2JRyPTsbp-a8m7l_YNCETRll5ZG7GS1WIkBY7hpvr4NnYiTGTbtMuMMsW0WcA'
      },
      {
        image: 'https://lh3.googleusercontent.com/fife/ALs6j_GS38qiPwAydZxkdZCyFBWfbW5s5fiHrJrSgj3q6g9qg4nSeXFm3geLvyQHvbIxOEaIW5Ox4GCGyI0d2Hw-01fruQgZ-uRf3z3TPojuwVBVxhaO4rrFAY7soYIfqqBIZpQ4A6pCu88ofZkKvm0tM1yu-nt817xqNFwZzzIsNny75cWfZtd9eu0MmkA6FYM1S4QHl36ll1RzyxJ4Nl55uWOKdNL1TfEVmuMU0L0PPM1mruYY3h__eZZAS3YTjbLMyAVN8iAvAU-rTlA8WxJU6tql0Av6JJ0bntyChVJV2dm4Aqndn0QvhTPdaki4anlGsnUDUtTOHbVX8nGsmI5osb3fSzaNZrF9FuCEYAd-8RmhRnGj1HhO5JyQpk56L6QztWdMaE0aJ0FXFPYljxOaa6FDPWHIVbeVBdcMeMqu-y1y5tuxTKVAMs53Dh5tgFnXM35Cx0yrLoEeL-8CbYDaWY1YsgMreKVoJLAkMBfjVGHmUljHPqWSo2XbXqGvun6LmdRCwBqiT_KaL1pPT9ovplrZoFmYS3GdHBgrIKxGLyssTB0heN6ZkjaCX2CKhsoUtsSqFfXfGLm5HI5XlLgiLaMi_sP7Hn2VbijpKbm0Gmz4qWZHGSm-BJ6drWUOoFhyKLVFHuSM_7692EzLVFZPebUTBrtNpWwrAj-azHpSkoSxERLTWxfSTH0TFTroRm8IL3ryyUA6wM5VzVG5o-855jqL9B0mifzKmwKffqu3j0Ni6ton5cSqriSmfeK7VSs3ZgqC5PwqpQVEGzjPM3CKqPdU9N9uPshiM_ihoYMTNUfAjBxMc0gxEGgMtQUl1PamnsBsdJ3rn58dKplZV728hmQvJVBqydgKiAwkTCQgnWPa-sKOxj2gdF_nBfO6oqvtanzLPfxGJLg1E3dL7dI0knFTmV5ZP20m43_snFtnhAJtK0ztV_-zdVM5off4FkxSEnAZjwOqv1DQUfKIMT-s9TL-_9ESNqpU_KA0ieZ_lk2qoPGVCjRQF4tuXtLVcs10Sz2oah4P0f43jqBVqTGb922LMEMgTiqL3-KMmGQPrRfgQhL0z_xAiJYDmWw1WqXDoZ2ZafqkMTCN_qUYj1A4H6YdMnsP9OfO0DYcds4K6u5IJyfCV316fNp8Me_7XkF8C5CZD12qvgQf9j5nhhAjoS1zhImwbUd69K1T72m2vd-XtUy7cRwjsXdu0-NRD-Fb5DR6MX_nf_bj_1O3f5FcLgDq3QQnnNNCpO8jX7eXahMAtWp74BJowVKIPtzhHwQl6vBdBLa3HY3WGVrX8BtLTsnCi93fmApaulADskA8wsHo8T7bcLvDHM8L593M5u5HmITir2uyelII0RA58tsOzDk9z0sGVJRvkgFg_GqOPTeGCVruRzBr7rwCQiEN2kJ9anuVTTmaAtCG2zaBlREv2hDhqLsRhrMgfuViRCBpk7VNGCrel3UnREKKqtnEEoQmSYZMXWBcGEiWeVdD7ge6js0sXQNiJHs23x0wiu4R0zJ-5cY1EqNFpdxWgVe6Xl7hUGP6Zej9tUmkbMHOunOyoxTqoqfU4SPl3zARM5-HDFlE21LtUxj_wp4I6B2QY-_kaSj1YL7G3G09'
      },
      {
        image: 'https://lh3.googleusercontent.com/fife/ALs6j_HxagLW1P2shRf2iiwMAY3-QW0RQrFANGyrKkuSSSdFTU_h1NoFIvIDcH2D1lzeiDU5-wnK8-PqpzFlsuuQVYgtlYyOQPJ4U7LP7m9JfB2EFbV4Zlf1yoxiXQv13RTrg6jClGh13jGmSWRHKev8TdlVliwt8XKW9MoUZWo2_qwNtUqmQOoqvydt9-qnqJU5lieUjk6vpVILURn27tkLvKRFt5jTfCt0xZi-gTQBw9thT-xf4ftsG2ueRWWKKTHHVTVDuFujEQJ6eKWHRVr3Nf74AEm0ABbhsNG8yBxTdO_qkM9-WDkSrJ44gZVlNV07stD0wKXwgyyv5T8JYKGENz1NjlfmvlVst-PN1XyLYRCWBrpjZOnUEs_KWtMdGedlkTKlCRiCs_yakSPcMAzPW-N9KmOo8tLA37uwOHysxLtOVl29MEhB43HrF2xeley1NiF43lPRdELm7EjPjzc-_7ARyfTVGZX2tZHmZ7un2mPjImq3z9YvXxboOQ9_URBSdo9bIRowcUeTXEU3udPVuH6Vla5AYHrlEoAAYwactMHp-13JhTf0OoZ2zykI1ggXZoYWXAtk_e84VlRJ71mc-wIeXB_6khNvPaikPOxxUnfWB0rqzdBvNo2ZX7DYrG-NWS3YQH5Ju--jljhvDQ-_tJWZqQbTiQqxsQp5UJIxDI-3VxJGbS3wPcTAtloKxhoLNIXOOavEwgAlI1cCSSj8LYx4RZaEP8-QeeiKzc72iuMcyUaLNXspSyvf3X58bFEXBnAq9W6erkA5FpvgBfKtMyPF2j8iYw0yOA-mntzMnCBKJ6Uq5WhniCFsPZ6wV975vfE5hCPCoD5PT166bk5tNEj4lg016a-r9Lfi-ag17g4-CN7F2IeqGh8cyHWuX7H1FxI1yhaEmtz2353R2eUF27w4jHiWBztlYBtO3_cw3H10cGP-OamREahlawb3im7Zjh1Wpb9TuIzmhe9vpI87qgSJjs31Vwe8bp4LycWebppEb3yZC4Ad9jNqxQGB8WniM9L0aMlbz89TpTWt7xZrE6_klCuLFStBHvRzCLrzkSp1Nfl_uL3IrEv7JeL36iias-nVP_xjXcJkQ89wL2VJiVK5CgVW-KL5hJyx9qGfJiI0Oon3NIIhq2_IawvS-XNPwZk-EwOfjoffmD8ZPnu4eFxyn1onR-qMyiO8uVPODnFhy-t2IWCyAyR2mnyEBrqahmei0OgsqdZtL1jZ9eOjFeVKZdChcJN3DDzK8G98bWo0mTms-pCSkjcaga4qw_LQROrkKVWgbwCueS-9X05B-ygl6Dz8QdxwQbnCp2FFdjpfZY8UQm-THK4EnUWxlaRSqvECgm_1MTQzb7E_RZmpMnH_sbsiML0vTk7lEn4H-XqVhhb9uVp58ss4YDoVECo4MhTHK0gqeWajQFR34uoiMm3i380ngSmPwzkARpIBYGGcxB2QbMh76S41tGNjwd0ae0XEx1_VEFJkd_ob9c3MysRxQO5UUilXH4_XKYAyf7PLU4wuIc4yFKhwyX0iCJdY4sBYE1zmrQIkdPCi1f-q7Rg0efx10P1qfVU1jBUPdol8wEoE6nlOSW-vttNh4NhWIcL4OmpeDpSByCU'
      }
    ]
  }

  ngAfterViewChecked(): void {
    this.isActiveNews = this.newsService.isActiveNews
    if (!this.settingsService.isActivesettings || !this.homeSettingsData || this.homeSettingsData?.length == 0) {
      this.getAllSettings()
    }
    this.cd.detectChanges()
  }

  getAllSettings() {
    this.settingsService.getAllSettings()
      .subscribe((res: any) => {
        this.homeSettingsData = res.data?.filter((item: any) => !!item)
        if (res.data?.filter((item: any) => !!item && item?.module == 'topSlideShow')?.length > 0) {
          this.bannerData = res.data?.map((item: any) => {
            let image = ''
            if (item?.type == 'googleDrive') {
              image = `https://lh3.googleusercontent.com/fife/${item?.data}`
            }
            return {
              image: image
            }
          })?.concat(this.bannerData)
          console.log(this.homeSettingsData);
        }
      })
  }
}