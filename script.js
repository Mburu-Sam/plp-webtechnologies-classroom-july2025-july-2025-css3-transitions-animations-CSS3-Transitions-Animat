        let globalVar = "I'm global";
        function calculateArea(width, height) {
            return width * height;
        }
        
        function scopeDemo() {
            let localVar = "I'm local";
            return { global: globalVar, local: localVar };
        }
        
        function animateElement(element, animationClass) {
            element.classList.remove(animationClass);
            void element.offsetWidth; 
            element.classList.add(animationClass);
            return "Animation started";
        }
      
        function triggerAnimation() {
            const box = document.getElementById('jsAnimationBox');
            const result = animateElement(box, 'animated');
            document.getElementById('animationOutput').textContent = result;
           
            setTimeout(() => {
                document.getElementById('animationOutput').textContent = "";
            }, 2000);
        }
       
        function openModal() {
            const modal = document.getElementById('modal');
            modal.classList.add('show');
        }
        
        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('show');
        }
        
        function demoCalculateArea() {
            const result = calculateArea(5, 7);
            document.getElementById('areaOutput').textContent = `Area: ${result}`;
        }
        
        function demoScope() {
            const result = scopeDemo();
            document.getElementById('scopeOutput').textContent = 
                `Global: ${result.global}, Local: ${result.local}`;
        }
        
        function demoAnimationFunction() {
            const box = document.getElementById('jsAnimationBox');
            const result = animateElement(box, 'animated');
            document.getElementById('animationOutput').textContent = result;
        }