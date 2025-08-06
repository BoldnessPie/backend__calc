import ValidationError from "../middleware/validation-errors.js";

const VALID_SIZES = {
  pipe: ["20", "25"],
  sheet: ["1", "1,5"]
};

export function validation(pipeSize, sheetSize) {
  // Проверка на наличие данных
  if (!pipeSize || !sheetSize) {
    throw new ValidationError("Не переданы обязательные параметры: pipeSize и sheetSize");
  }

  // Проверка допустимых значений
  if (!VALID_SIZES.pipe.includes(pipeSize)) {
    throw new ValidationError(
      `Недопустимый размер трубы: ${pipeSize}. Допустимые значения: ${VALID_SIZES.pipe.join(', ')}`
    );
  }

  if (!VALID_SIZES.sheet.includes(sheetSize)) {
    throw new ValidationError(
      `Недопустимый размер листа: ${sheetSize}. Допустимые значения: ${VALID_SIZES.sheet.join(', ')}`
    );
  }
}