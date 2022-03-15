import toggleModal from './modal.js';
import addLeadingZero from './utils.js';

const floorScript = () => {
  const flatModalId = 'flat-modal';
  const minFloor = 2;
  const maxFloor = 18;
  let currentFloor = 10;
  let previousFloor = 10;

  const allFloors = document.querySelectorAll('.floor');
  const floorCounters = document.querySelectorAll('.floor-counter');
  const floorCounterButtons = document.querySelectorAll('.counter-btn');
  const flatLinks = document.querySelectorAll('.flat-link');
  const flats = document.querySelectorAll('.flat');

  const updateFloorView = () => {
    allFloors[previousFloor - minFloor].classList.remove('current-floor');
    allFloors[currentFloor - minFloor].classList.add('current-floor');
    previousFloor = currentFloor;
    floorCounters.forEach((counter) => {
      counter.textContent = addLeadingZero(currentFloor);
    });
  };

  allFloors.forEach((floor) => {
    floor.addEventListener('mouseover', () => {
      currentFloor = Number(floor.dataset.floor);
      updateFloorView();
    });
    floor.addEventListener('click', () => toggleModal(flatModalId));
  });

  floorCounterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.direction;

      const isTop = direction === 'top';
      if (isTop && currentFloor > maxFloor) return;

      const isBottom = direction === 'bottom';
      if (isBottom && currentFloor < minFloor) return;

      const isNotLimitFloor =
        (isTop && currentFloor !== maxFloor) ||
        (isBottom && currentFloor !== minFloor);
      if (!isNotLimitFloor) return;

      currentFloor = isTop ? currentFloor + 1 : currentFloor - 1;
      updateFloorView();
    });
  });

  const t = () => {
    flats.forEach((f) => {
      f.classList.remove('active');
    });
  };

  const t2 = () => {
    flatLinks.forEach((f) => {
      f.classList.remove('active');
    });
  };

  flatLinks.forEach((link) => {
    link.addEventListener('mouseover', () => {
      t();
      const currentFlatNumber = Number(link.dataset.flat);
      const currentFlat = document.querySelector(
        `.flat[data-flat="${currentFlatNumber}"]`
      );
      currentFlat.classList.add('active');
      t2();
    });
  });

  flats.forEach((flat) => {
    flat.addEventListener('mouseover', () => {
      t2();
      const currentFlatNumber = Number(flat.dataset.flat);
      const currentLink = document.querySelector(
        `.flat-link[data-flat="${currentFlatNumber}"]`
      );
      currentLink.classList.add('active');
      t();
    });
  });
};

export default floorScript;
