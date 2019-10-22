module.exports = {

    Flip_Coin(toss) {
        var head_count = 0;
        var tail_count = 0;
        new Array(toss);

        for (var i = 0; i < toss; i++) {
            Array[i] = Math.random();
            console.log(Array[i]);
            if (Array[i] < 0.5) {
                tail_count++;
            }
            else {
                head_count++;
            }
        }
        var tail_percentage = tail_count * 100 / toss;
        var head_percentage = head_count * 100 / toss;
        console.log('Number of Tail count is-' + tail_count + 'And tail percentage is-' + tail_percentage);
        console.log('Number of Head count is-' + head_count + 'And tail percentage is-' + head_percentage);
    },
}