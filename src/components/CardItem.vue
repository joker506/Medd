<template>
  <div class="card__container">
    <div class="card__wrap">
      <div class="card__top">
        <h1>Card</h1>
      </div>
      <div class="card__body">
        <div class="body__img">
          <p class="img__wrap">
            <img src="../assets/svg/avatar.svg" alt="" />
          </p>
          <p class="name__wrap">
            <span class="name__item"
              >Dr. Charlez Norman <br />
              Friedlander</span
            >
            <span class="name__email">@friedlandercharlez</span>
          </p>
        </div>
      </div>
      <div class="card__body">
        <div class="body__topic">
          <p class="topic__content">
            Scientific topic #1 • Career topic #48 • Scientific interests #4 •
            Scientific topic #4 • Career topic #96 • Scientific interests #24 •
            Scientific topic #8
          </p>
        </div>
      </div>
      <div class="card__body">
        <div class="body__place">
          <span class="place__specializ"
            >Gastroenterology | Obstetrics & Gynecology | Reproductive
            Endocrinology
          </span>
          <span class="place__adress">Los Angeles, CA, USA | 3+ Yrs Exp </span>
        </div>
      </div>
      <div class="card__footer">
        <div class="footer-price__wrap">
          <span class="footer__price">$1 200</span>
        </div>
          <p>
            <ul class="social__group">
                <li class="social__item--share">
                    <a  class="items__link" href="#"></a> 
                    </li>
                <li class="social__item--save">
                    <a class="items__link" href="#"></a> 
                    </li>
                <li class="social__item--like">
                    <a  class="items__link" href="#"></a> 
                    </li>
            </ul>
          </p>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardItem",
};
</script>

<style lang="scss" scoped>
.card__container {
  height: 481px;
  width: 400px;
  margin: 0 auto;
}
.card__top {
  background: url("../assets/svg/CardBg.svg");
  min-height: 100px;
}
.card__body {
  border-bottom: 2px solid #f8f8f8;
}
.body__img {
  display: flex;
  justify-content: space-around;
  //background: aqua;
}
.img__wrap {
  position: relative;
  top: -3vh;
  left: 20px;
}
.name__wrap {
  width: 225px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin-left: 15px;

  //margin-top: 20px;
}
.name__item {
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 8px;
}
.name__email {
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #00cbad;
}
.topic__content {
  text-align: left;
  margin: 20px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #6b6f78;
}
.body__place {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 20px 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  color: #95989f;
}
.place__specializ,
.place__adress {
  position: relative;
  padding-left: 30px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    background: url("../assets/svg/Specialization.svg");
  }
}
.place__adress {
  &::before {
    background: url("../assets/svg/Place.svg");
  }
}
.card__footer{
    display: flex;
    justify-content: space-between;
}
.footer-price__wrap{
    display: flex;
    justify-content: space-between;
    margin:23px 0;
   
}
.footer__price{
font-weight: bold;
font-size: 18px;
line-height: 26px;
}
.social__group{
    display: flex;
    margin: 23px 0;
    
}
.social__item--share,
.social__item--like,
.social__item--save{
    position: relative;
    list-style: none;
    height: 32px;
    width: 32px;
    margin-right: 5px;
    cursor: pointer;
    &::before{
        content: '';
        width: 32px;
        height: 32px;
        position: absolute;
        background-image: url('../assets/svg/Share.svg');
    }
}
.social__item--save{
    &::before{
         background-image: url('../assets/svg/Saved.svg');
        
    }
}
.social__item--like{
    &::before{
         background-image: url('../assets/svg/Like.svg');
        
    }
}
</style>
