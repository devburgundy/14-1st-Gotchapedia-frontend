import React, { Component } from 'react';

class PreferredCountryGenre extends Component {
  render() {
    return (
      <>
        <div className='preferredCountry'>
          <div className='title'>영화 선호국가</div>
          <ul className='top3'>
            <li>
              <div className='bold big'>미국</div>
              <div className='grey small'>94점 ・ 485편</div>
            </li>
            <li>
              <div className='bold big'>영국</div>
              <div className='grey small'>84점 ・ 142편</div>
            </li>
            <li>
              <div className='bold big'>한국</div>
              <div className='grey small'>82점 ・ 157편</div>
            </li>
          </ul>
          <ul className='top6 grey'>
            <li>
              <div>독일</div>
              <div className='small'>72점 ・ 60편</div>
            </li>
            <li>
              <div>프랑스</div>
              <div className='small'>67점 ・ 60편</div>
            </li>
            <li>
              <div>캐나다</div>
              <div className='small'>64점 ・ 39편</div>
            </li>
          </ul>
        </div>
        <div className='preferredGenre'>
          <div className='title'>영화 선호장르</div>
          <div className='genreWrapper'>
            <div className='genreMbti pink'>인생은 역시 한 편의 드라마!</div>
            <ul className='top3'>
              <li>
                <div className='bold big'>드라마</div>
                <div className='grey small'>91점 ・ 485편</div>
              </li>
              <li>
                <div className='bold big'>모험</div>
                <div className='grey small'>90점 ・ 275편</div>
              </li>
              <li>
                <div className='bold big'>액션</div>
                <div className='grey small'>89점 ・ 288편</div>
              </li>
            </ul>
            <ul className='top6 grey'>
              <li>
                <div>코미디</div>
                <div className='small'>88점 ・ 298편</div>
              </li>
              <li>
                <div>판타지</div>
                <div className='small'>88점 ・ 211편</div>
              </li>
              <li>
                <div>SF</div>
                <div className='small'>87점 ・ 172편</div>
              </li>
            </ul>
            <button className='moreBtn bold'>더보기</button>
          </div>
        </div>
      </>
    );
  }
}
export default PreferredCountryGenre;
