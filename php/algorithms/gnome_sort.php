<?php
    $arr = [7, 3, 5, 1, 2, 9, 0, 8, 11, 95];

    function gnomeSort($arr)
    {
        $i = 1;
        while($i < count($arr)){
            if($arr[$i-1] < $arr[$i]){
                $i++;
            }else{
                $buffer = $arr[$i];
                $arr[$i] = $arr[$i-1];
                $arr[$i-1] = $buffer;
                $i--;
            }
            if($i === 0){
                $i = 1;
            }
        }
        return $arr;
    }

    function binFinder($sorted, $elem)
    {
        $left = 0;
        $right = count($sorted)-1;
        $mid = floor(($right - $left)/2);

        $isFound;

        if(isset($sorted[$mid]) && $sorted[$mid] == $elem){

            $isFound = 'yes';

        }elseif(count($sorted) < 1){

            $isFound = 'no';

        }elseif($sorted[$mid] < $elem){
            $sliced = array_slice($sorted, $mid+1);
            $left = $mid;
            $isFound = binFinder($sliced, $elem);

        }elseif($sorted[$mid] > $elem){
            $sliced = array_slice($sorted, $left, $right-$mid);
            $right = $mid;
            $isFound = binFinder($sliced, $elem);
        }

        return $isFound;
    }

    $sorted = gnomeSort($arr);

    echo binFinder($sorted, 13)."\n";