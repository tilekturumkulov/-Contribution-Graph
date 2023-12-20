import React, { useEffect, useState } from 'react';

const ContributionGraph = () => {
  const [datesArrayTwo, setDatesArrayTwo] = useState([]);
  const [filteredObject, setFilteredObject] = useState({});
  const [hoveredDate, setHoveredDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const api = "https://dpg.gg/test/calendar.json";
        const response = await fetch(api);
        const json = await response.json();
        const arrCells = json;

        // Получение даты 357 дней назад
        const currentDate = new Date();
        const date357DaysAgo = new Date(currentDate);
        date357DaysAgo.setDate(currentDate.getDate() - 358);
        const startDate = date357DaysAgo.toISOString().split('T')[0];

        // Задание старта отчета 357 дней назад
        const filteredObject = Object.fromEntries(
          Object.entries(arrCells).filter(([date]) => date >= startDate)
        );

        // Нахождение массива из дат до сегодняшнего числа начиная с 2022-12-27
        const startDateString = "2022-12-27";
        const startDateTwo = new Date(startDateString);
        const currentDateTwo = new Date();
        const datesArray = [];

        for (let date = startDateTwo; date <= currentDateTwo; date.setDate(date.getDate() + 1)) {
          datesArray.push(date.toISOString().split('T')[0]);
        }

        setDatesArrayTwo(datesArray);
        setFilteredObject(filteredObject);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const getCellStyle = (date) => {
    const cellValue = filteredObject[date];

    if (cellValue >= 2 && cellValue <= 9) {
      return { backgroundColor: '#ACD5F2' };
    } else if (cellValue > 9 && cellValue <= 19) {
      return { backgroundColor: '#7FA8C9' };
    } else if (cellValue > 19 && cellValue <= 29) {
      return { backgroundColor: '#527BA0' };
    } else if (cellValue > 29 && cellValue <= 39) {
      return { backgroundColor: '#254E77' };
    } else {
      return { backgroundColor: '#defaultColor', color: '#defaultTextColor' };
    }
  };

  const handleMouseEnter = (date) => {
    setHoveredDate(date);
  };

  const handleMouseLeave = () => {
    setHoveredDate(null);
  };

  return (
    <div className="main">
      <div className="container">
      <ul className="month_name">
          <li className="month_name">Дек.</li>
          <li className="month_name">Янв.</li>
          <li className="month_name">Фев.</li>
          <li className="month_name">Март</li>
          <li className="month_name">Апр.</li>
          <li className="month_name">Май</li>
          <li className="month_name">Июль</li>
          <li className="month_name">Июль</li>
          <li className="month_name">Авг.</li>
          <li className="month_name">Сент.</li>
          <li className="month_name">Окт.</li>
          <li className="month_name">Нояб.</li>
          <li className="month_name">Дек.</li>
        </ul>
        <div className="blocks">
        <ul className="blocks_weeks">
            <li className="blocks_weeks__day">Пн.</li>
            <li className="blocks_weeks__day">Вт.</li>
            <li className="blocks_weeks__day">Ср.</li>
            <li className="blocks_weeks__day">Чт.</li>
            <li className="blocks_weeks__day">Пт.</li>
            <li className="blocks_weeks__day">Сб.</li>
            <li className="blocks_weeks__day">Вс.</li>
          </ul>
          <div className="blocks_cells">
            {datesArrayTwo.map((date, index) => (
              filteredObject[date] ? (
                <div
                  className={`blocks_cells__item ${hoveredDate === date ? 'hovered' : ''}`}
                  key={index}
                  style={{ ...getCellStyle(date) }}
                  onMouseEnter={() => handleMouseEnter(date)}
                  onMouseLeave={handleMouseLeave}
                >
                  {hoveredDate === date && (
                    <div className='block_cells__info'>
                      <h3>
                      {filteredObject[date].value !== undefined ? `${filteredObject[date].value} contributions` : ''}
                      </h3>
                      <p>
                      {(() => {
                            if (date.slice(5, 7) === '01') {
                            return `Январь ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '02') {
                            return `Февраль ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '03') {
                            return `Март ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '04') {
                            return `Апрель ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '05') {
                            return `Май ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '06') {
                            return `Июнь ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '07') {
                            return `Июль ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '08') {
                            return `Август ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '09') {
                            return `Сентябрь ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '10') {
                            return `Октябрь ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '11') {
                            return `Ноябрь ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else if (date.slice(5, 7) === '12') {
                            return `Декабрь ${date.slice(-2)}, ${date.slice(0, 4)}`;
                            } else {
                            return '';
                            }
                        })()}
                      </p>
                    </div>
                  )}
                </div>
              ) : (
                <div className='blocks_cells__item' key={index}></div>
              )
            ))}
          </div>
        </div>
          <div className="contributions">
            <li>Меньше</li>
            <div className="colors">
            <div className="first_color "></div>
            <div className="second_color"></div>
            <div className="third_color"></div>
            <div className="fourth_color"></div>
            </div>
            <li>Больше</li>
            </div> 
      </div>
    </div>
  );
};

export default ContributionGraph;