# Widget de verificación de CURP

Este proyecto es un widget interactivo desarrollado con React que permite a los usuarios consultar y verificar su Clave Única de Registro de Población (CURP) en México, ya sea ingresando directamente el CURP o proporcionando sus datos personales. La aplicación está diseñada para ser fácilmente embebible en cualquier página web.

## 🚀 Tecnologías utilizadas

- **Frontend:**
    - [React.js](https://react.dev/) (Vite)
    - [Material-UI (MUI)](https://mui.com/) para componentes UI y estilizado.
    - HTML, CSS (con variables CSS para theming).
    - JavaScript (ES6+).
- **Backend (Proxy para API):**
    - [Netlify Functions](https://docs.netlify.com/functions/overview/) (Node.js) para actuar como proxy y resolver problemas de CORS con la API externa.
- **API Externa:**
    - API de Prometeo para la consulta y validación de CURP.
- **Persistencia Local:**
    - LocalStorage para guardar y autocompletar CURPs consultados previamente.

## ✨ Justificación de React

React fue elegido para este proyecto por varias razones:

- **Componentización:** Permite dividir la interfaz de usuario en componentes reutilizables (formularios, spinners, displays de resultados), lo que facilita el desarrollo, mantenimiento y escalabilidad del código.
- **Gestión de estado eficiente:** El uso de hooks como **useState** y **useCallback** en combinación con un custom hook (**useCurpApi**) centraliza y optimiza la gestión del estado de la aplicación (datos, carga, errores), haciendo el flujo de datos predecible.
- **Interfaz de usuario dinámica:** Facilita la creación de una interfaz de usuario interactiva y dinámica.
- **Ecosistema robusto:** La integración con Material-UI proporciona un conjunto de componentes UI, acelerando el desarrollo y asegurando un diseño coherente.

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── CurpForm.jsx        
│   ├── PersonalDataForm.jsx 
│   ├── ResultDisplay.jsx   
│   ├── ErrorMessage.jsx    
│   └── LoadingSpinner.jsx  
├── hooks/
│   └── useCurpApi.js       
├── App.jsx                
├── main.jsx                
├── index.css               
└── App.css                 
```

## 🎨 Consideraciones de UX/Accesibilidad

- **Diseño responsivo:** La interfaz de usuario se adapta a diferentes tamaños de pantalla, asegurando una experiencia óptima tanto en dispositivos móviles como de escritorio.
- **Validación en tiempo real:** Los campos de formulario proporcionan feedback instantáneo al usuario sobre la validez de los datos ingresados.
- **Estados de carga y error Claros:** Se utilizan spinners de carga y mensajes de error explícitos para informar al usuario sobre el estado de las operaciones de la API.
- **Componentes accesibles:** El uso de Material-UI garantiza que los componentes de UI sean inherentemente accesibles, siguiendo las mejores prácticas de WAI-ARIA.
- **Navegación intuitiva:** El selector de formularios permite cambiar fácilmente entre los métodos de consulta.

**URL Pública de la Aplicación Desplegada:** https://curp-widget.netlify.app/
