import React from 'react'
import './home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
           <div className="home-container">
                <img style={{height:600}} className="home" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/row/sadlp/AVD-8688_SADLP_Intl_TheTick_SeriesLaunch_ROW_Image_Right_FT.jpg"/>
           </div>
           <div className="home-row">
                <Product
                    rating={5}
                    price={200.0}
                    title="Apple iPhone 11 Pro (64GB) - Space Grey"
                    image="https://images-na.ssl-images-amazon.com/images/I/61m6DjujESL._SL1024_.jpg"
                />
           </div>
           <div className="home-row">
                <Product 
                    title="Pick from these types of masks" 
                    image="https://www.washingtonpost.com/resizer/jQXNYb0CCDwBqoHOn9uvy2lW2FY=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/YGKWCWKR4NAW7LHYDHTM64ES44.jpg"
                    price={20.1} 
                    rating={4} />
                <Product
                    title="Masks, sanitizers & more"
                    image="data:image/webp;base64,UklGRrQNAABXRUJQVlA4IKgNAAAQUwCdASosASwBPrFYokykIqGjIXr5aIgWCelu4XHhH8gSeB4F23uzPeU5/v0o+4vbvmmtW/2nrc/tfD3bA37HUP9J/wPUR9m/t364+SRq6XV/rb4hn3v/XedH/q+pV/y/6r0PfTv/k9wf9c/+x2Ff3F9j/9rRLEA6AY9TPSngJvBHBIZeNtRSqYx/4hfPh/MSzi8a/GkaXJWp+YF0kMvG2opVFEVmurrE3tMGWom+pdW1m2opVMbZtE0ds5a3/c7lEA6BO46zI02XoI/P+KeExuzH1tLqgA6BO46zLuHH/+jNvFQXil6ivOdDh8n4SUcLXG3uzq8bailUvtMvx8Vo/PIpddce1MIV/9ZLaAekgdUE01InuyLE/9NEqcoAOgTuFZI3qP4yb7ZpuXUsQV8f4oMwHY8E7+yptFKpjbUBILr+E3++jkFPsXwqlmfw0QqC7HdZpMdMiCS8nPke1wxsFkypDbUUqmNWHCszPbZLyW0dLlxIxaETGK4aJJtaVkrzQXXzYYVCtT+TOLgA6A1rGcGOdSw+c9d0JiB8aVaAMNGGp4e3yW0ZCoe4uADoE3N8AGddGaL21lTwpfNDhocJnEch+W4y/qpqRrb8FzAbMAlEA6A8pnUkQTkAnfn6ji9KeHUsjw79z2D8gcoAOgTuOp2fF9w6ImIpDpmAa/OhZdN9q1b9VqcXL+3ywNE2huXUUAHQJ3GgwXvxBqiGlb6assWs7QWnsZ0+TyGJoPyjZ/LxtqKVSepf6YP8LDzJKIC5RYhIQ1XjQ7XoC9OtKpjbT0lJ6FwuXIxqq6QDPJcKnInQJlGdloZ1rf+vXcdaVTGWRnIjxlCSH4NjUBQMg2s0zEPjVeL5IJuIpBX36g504ocXa5G9ilUxtqKW8SzAJQ+AAP7+1+DPA1WQDZOCkq4PNUmJ8ojU6VkAl8q30K8u4+4RprOsKGaKp9ehP443hfx1AOuvpVqN6HW0jJ9/tZYTWf8LEhGe2L5vfomcqV8UxpXv2aRp2No6z0ye8vC2jclkl70kZMN7Hcxd6L7R7t1IghYl0ZaXCgQOHicJaVB/QoFCU5YHSW7jXIKLAEOlQWcKSeIuoRQIw/IKV+rGVUNPPKE0CsTnXQT20ZpLWUaAW6wn3lS+DfelgAMi0knQmKlq+r2KHaYg87rMnuzs0sACuyr30Zrrkt+7YLkC6MD56y8srUQSYeKBz9NtGGCNvSlJ3RL/snFK7tDMbZYYWiQ+ngZUbIGbMlrHGebJU92tqEK7eZqr3wZutnl9SAgwCDvEBo1Z+XU8kI6yflEM61e1wd1+d63+YaQnyq2lsOOHl1d2niO+LGCuJ8NUI75csSbdJx47Xez+vbCp3SVydm/1Q+pW5Y91V6uiMNz7bArxaZRoC/3wpNtTFqpSxGeVhK2E/joD7Gv/p7yb6cThMkpRHjAL/M+/H8vea7uAk0fOZArjP4yXgL2VjI8lkCkub5ldCI5hq8OoJAgmW9GmAuFch7vrw38ss34iqPjkguzrib3fvefRz6lf+f+ElMT4JpLmYtRpEWHTysfawxl2g3L0bsTaB5KE3z+gjMhOx7vm/YPO9b57qroAPTIdb9Z1d3c6FBkwtqUJOuCvWH9WuseDgvVWDvR85ZdyjGsrsdXTROKZzkadFNkPJQTpddaS+zFTBgeM25YOCYUhxV2c1IdTQLbr17ukrCKyxDr9WYWCopUkKyCfNlNHF0aKEL4Lquj2DEt6AZTR42+uJTeHeguvZaToNAMDtFMzQ0vSkc8+dzn4izOhTk/kYnk8pr5IT27qj9EmMM/dNi8cdauOzoRi1y1dXI/OcefS2sjBnMs5/+1xLXKguT7sbP2UhsTd1wf5qoOUEy99nsVfetGxZvnABtzJ6GaDgkNpb0o6vih3IYbV4moX50pnxRFJ/B9g1f6OfWeDIlKBWDf29cJdHlvag9M4jlx1dKArgN0BONyrAO8vyAj1ELkc98EvXChzCtZj81eiLJqEs8STsc9GlfxyN28iSqP5w8pNFHuYIsuK1fJwPxn/0gbjy+LYuTYAmsNOgCUWeQD9eFZ3HJgoJQmp1GqiM8NewnU7wxjdOBLhLamB3Ejno6bybTET+0h5623YJDhNv1rlgwgDrFnn+vmPr4lRGF+T2FR4ySmyHOcz0alIQi3ba1D2wfQ08jvCBpIlFEbbU6zUkXWn8tTfwBAou7JVJggMlHbKIVSdd4dvTfKOVi0qSUeNTHOGe5a1eYqVs7OnChZxShylqCisZal1C3fVvSwDEAQ9Ker6gw9O17iZG7k7rJLjQo1uORbP1KheuRMGimC4pw/vtaaKiHdaPZCgyKHLYxsWXr5td3Ocxtt6AJflaQWyqdU8z+q35fxmqFBTmpd3q7TiZFmkOCAnxJp3G5jT9TQJLa3I/v4Rj0N3bb69rDQaJcmWxLsadHjjXMyj69uAt3nKpfl9N0adrJwRSY7rRlrGbYYnYU1+6LXBcXJpls+OXezy97jByACyAzMixs2b/LnHoM8k5LNBLKgPuXgtJ2wFWd6bE0uvM7mXE7zYjaAqXreAzX+YsefmGVweiCO2q7J+V9sGRL6/bU5ewy/AWCaQQ6E2CJxvQEw4HQBiChifwLhLHC3tnjMQh+LZKJZ67KG7fS6a8PyI1ogO90OCX3pQX3RCn4mlCzv/9ltlXQEMyvIfVZxdHysi9q5e7TNGDFf03mwuIANFbmC1J0FWbJx6PpNrDe447g0KAeeuvIHzeGZiOPLhslT9RE+IDR0eNWP8BTsB9mlrHH2vTz8FadrsXPHcHFafzDmxMCFAyVx/CH61WuFip79BsZklso3+rE57pDsLbGLVaxpx7aXU9rcnaLxwGDbH9K/GL1CZEKWRg7NzIUaSsXKaICsYO4b4ndGi5SBRg1X881tLt24zciTBgf1IvOTI2vL6YSpc3LbQOI0PNixKr86NfWPr0/NiFtZDxBbG7iWUo+Rsa33aX4qZ7JskLurHCek8KVeruqSl5iltZxit1C1ws1eiyMi4FyLG6xXgoiFMw4PVI/ujDkDxrQJ6aOZaWkufxufaoF7AKjbyV58mbPJerW/3FRdqNpWR++JMGBKH3G10IDkCw54hwNrcoqzOEBuhN9VPEilvtt2i0TAHK6h+HAxu+OKqcMvhr29549YCXkJsMJ3nExBG4ivT2rTNwwr9w3zc1H8EREVRahg2gM0xjKukAGiLSdIjH02J66xT3e4TNbc9ZetcKwMc1DHLN9hjLkZQEbzei97aqM9vMSvRoBXifFJXXptFYg7dbkydPd7JTmOxnkZVDX7Gpg0faLolPbLoRajXhWJNHVQAaSi3/WUTgpscVc0N1DYMZhUDszEubxDO6QcQ5fj9iHfr2ve/8O21aaParI4YR0ebaVyTos4s0jqMeSg9fMvlYQ3dQF2O5Qt2Ib/QDSfEAjLV+5KZi4KLUUTQRcT0tDFKLNkSZU87aeGQeqw2mU4hCyKmHNGo9hqOniecLKrNjNe8BnwfHfsftR4foAYDViZk8+IwNkP0MSigmaR5LxwZIdsmFzXxirIPL5eM3cM+X1sNhQgH2qvdQt9BnrECY+U/WpXLDhjw0mAgLGaeaPSZ8gaAfJAEMVXKmUagXkcH7lOTj1uhrr+4eY88XOaJfaMMgo5wEk8NJZJQRbIABUyP6Fi/KWdWofHTMR79W5DjaxlEZs0KX2w/yWMKGOOXClqGcjnRVkzoN+zIWEz5lbJEAYSoQpndbvIVVBjMGv6IV3J2V3YDscTRhfxIxidPaS/wgbC4fWbwcfw6Ad7Toln/LLjEg/9HDA+FwR14RGihc6mjJftAZLyek8wKTPZjqTaJyR+82W+ruVYJCsVZ1X4qSET3QwJrJGfIdqaqMf6tIS+eK/OnMRkl1D4YIXPLqdb5XeWl+j3wKJGrCZfO4y0g/bDUpVCfaz+0MumT3nTKwcUljPGChfB2icaihOxnGBQHA2rDWtSrCO/ElRwkdJkEwTlZdYPxNx3pbN5fkhIaWaGQp+SNGP4oR4o2EIb4Mzs3t7Qf8/M3avIYbjSZhgc0W9AKaofvxuHj+s0kToGDZaDV0+OFKAXSCPONRxkNFjIzeAdGNFs2w5qJ1wA5fFJprI8pGtVFSisdFQRsAr3fdiIsxzqkZSAuIqwWofn8i+lgaFMisEidsXUvXJLyxAxq5eXuVPmuaYY53y6eOl8HzLAuuSbzcflaoB3ecsMIfu1Cjy7xZNo/f36JwSrEemoH9tuC/73dYenJOp5TCtdWMajkcUtMuB1pPipLt2e1JYQUdYg8CMvOi2vt8vKb4wmUps5ZgO6Yn90Q3aUyHSbqOaNaDgctJt9nSEuF9Th55RUQU4CXjBJMc/CI41rRZkN1b7wONiXw8d7gzl7S+GUvl8dkejP2zLLcplA25KsWYyGyooBGV/O8CXeovaCF3Cgxvy+RgK+QKM9DvKd0HHMiU1mcplxzW+1qegZCNkpV4IGwd9D0N6msUXvtyHZoouT3WDfFJ5rS/DhXIICFc6Siv0QDxdi8flVF046H+qfgGxqmM1gg2lOEfq6M1cwgv/qqIEcwPGkfj5QCyRWL3RYhFAB9aVRpRw8JCc5IZ9n5TVlHXkX0bL+msY8xZkrSO1iMJWkyMrL7x8MHkcRgYnIIizpgvl8mgRhxwAAA"
                    price={10.3}
                    rating={3}
                />
           </div>

           <div className="home-row">
                <Product
                    rating={4}
                    price={5.1}
                    title="Biscuits"
                    image="https://images-na.ssl-images-amazon.com/images/I/712UP4Hr-kL._SL1500_.jpg"
                />
                <Product
                    rating={4}
                    price={4.2}
                    title="Biscuits"
                    image="https://images-na.ssl-images-amazon.com/images/I/819bDz6Q9DL._SL1500_.jpg"
                />
                <Product
                     rating={5}
                    price={10.2}
                    title="Biscuits"
                    image="https://images-na.ssl-images-amazon.com/images/I/81cd463m-6L._SL1500_.jpg"
                />
           </div>

           <div className="home-row">
                <Product
                    rating={5}
                    price={110.5}
                    title="Lamkei XLAM-1322 Black Dial Black Silicone Strap Digital Multifunction Watch for Men"
                    image="https://images-na.ssl-images-amazon.com/images/I/91G7lYXfpvL._UL1500_.jpg"
                />
           </div>
           <div className="home-row">
                <Product
                    rating={4}
                    price={150.5}
                    title="Steelbird SBH-17 Terminator Full Face Graphic Helmet"
                    image="https://images-na.ssl-images-amazon.com/images/I/71ZeA8oAr1L._SL1445_.jpg"
                />
                <Product
                    rating={4}
                    price={200.1}
                    title="Steelbird SBA-1 Free Live Matt Black with Grey with Smoke visor"
                    image="https://images-na.ssl-images-amazon.com/images/I/51ILIabdi3L.jpg"
                />
                <Product
                    rating={5}
                    price={220.5}
                    title="Steelbird SBH-17 Terminator Full Face Graphic Helmet"
                    image="https://images-na.ssl-images-amazon.com/images/I/61aA5jDrZ4L._SL1100_.jpg"
                />
           </div>
        </div>
    )
}

export default Home;
