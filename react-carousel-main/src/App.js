import './App.css'
import CarouselCompound from './components/carousel-compound'

export default function App() {
  return (
    <div className="app__main-container">
      <CarouselCompound infinite>
        <CarouselCompound.Page>
          <div className="item item-1">Ходакова Мария, Ходакова Дарья, группы 19ВВП1</div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
          <div className="item item-2">
            Вариант - 7, 
            Задание	- Отобразить слайдер,
            Библиотека - react-awesome-slider,
            Документация - https://github.com/rcaferati/react-awesome-slider#basic-usage </div>
        </CarouselCompound.Page>
        <CarouselCompound.Page>
          <div className="item item-3">Item 3</div>
        </CarouselCompound.Page>
      </CarouselCompound>
    </div>
  )
}
