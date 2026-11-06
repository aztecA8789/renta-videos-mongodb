def pedir_codigo():
    while True:
        codigo = input("Ingrese el código del estudiante (ej. SIS-123456): ").strip().upper()
        if not codigo:
            print("El código no puede estar vacío.")
            continue
        return codigo

def pedir_nombre():
    while True:
        nombre = input("Ingrese el nombre del estudiante: ").strip()
        if not nombre:
            print("El nombre no puede estar vacío.")
            continue
        return nombre

def pedir_material():
    while True:
        material = input("Ingrese el título del material solicitado: ").strip()
        if not material:
            print("El título del material no puede estar vacío.")
            continue
        return material

def pedir_dias():
    while True:
        try:
            dias = int(input("Ingrese la cantidad de días del préstamo (1 a 30): "))
            if 1 <= dias <= 30:
                return dias
            print("Error: La cantidad de días debe ser un número entero entre 1 y 30.")
        except ValueError:
            print("Error: Debe ingresar un número entero válido.")