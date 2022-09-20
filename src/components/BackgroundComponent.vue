<template>
    <div id="conteudo">
        <div id="circle"></div>
        <div id="circleDois"></div>
        <div id="square"></div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
}

#conteudo {
    overflow: hidden;
    display: flex;
}

#circle {
    position: absolute;
    display: flex;
    right: 0vw;
    bottom: 0vh;
    width: 110vw;
    height: 150vh;
    background: #42b883;
    border-radius: 50%
}

#circleDois {
    display: flex;
    position: absolute;
    bottom: 00vh;
    left: -5vw;
    width: 90vw;
    height: 300vh;
    background: white;
    border-radius: 50%
}

#square {
    position: absolute;
    left: 90vw;
    width: 10vw;
    height: 25vh;
    background-color: #42b883;
}
</style>