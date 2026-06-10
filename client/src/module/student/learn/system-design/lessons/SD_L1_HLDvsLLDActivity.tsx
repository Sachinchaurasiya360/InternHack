
i
m
p
o
r
t
 
{
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
"
;


i
m
p
o
r
t
 
{
 
G
i
t
C
o
m
p
a
r
e
,
 
S
h
u
f
f
l
e
,
 
C
h
e
c
k
,
 
X
,
 
B
o
x
e
s
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
 
}
 
f
r
o
m
 
"
@
/
c
o
m
p
o
n
e
n
t
s
/
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
S
D
,


 
 
M
O
N
O
,


 
 
s
e
c
t
i
o
n
T
i
t
l
e
,


 
 
s
e
c
t
i
o
n
D
e
s
c
,


 
 
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
,


 
 
c
a
r
d
E
n
t
r
a
n
c
e
,


 
 
c
a
r
d
H
o
v
e
r
,


}
 
f
r
o
m
 
"
.
/
_
s
h
a
r
e
d
/
s
t
y
l
e
s
"
;




c
o
n
s
t
 
H
L
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
L
L
D
 
=
 
"
#
1
4
b
8
a
6
"
;


c
o
n
s
t
 
H
L
D
_
S
O
F
T
 
=
 
"
r
g
b
a
(
1
3
2
,
2
0
4
,
2
2
,
0
.
1
)
"
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
S
p
l
i
t
 
C
a
n
v
a
s
:
 
H
L
D
 
v
i
e
w
 
v
s
 
L
L
D
 
v
i
e
w
 
o
f
 
s
a
m
e
 
a
p
p
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
S
p
l
i
t
C
a
n
v
a
s
(
)
 
{


 
 
c
o
n
s
t
 
[
h
o
v
e
r
S
i
d
e
,
 
s
e
t
H
o
v
e
r
S
i
d
e
]
 
=
 
u
s
e
S
t
a
t
e
<
"
h
l
d
"
 
|
 
"
l
l
d
"
 
|
 
n
u
l
l
>
(
n
u
l
l
)
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
S
a
m
e
 
a
p
p
,
 
t
w
o
 
l
e
n
s
e
s
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
B
e
l
o
w
 
i
s
 
a
 
c
h
a
t
 
a
p
p
,
 
s
h
o
w
n
 
f
r
o
m
 
t
w
o
 
d
i
f
f
e
r
e
n
t
 
z
o
o
m
 
l
e
v
e
l
s
.
 
T
o
p
 
h
a
l
f
 
i
s
 
H
L
D
 
-
 
t
h
e
 
a
r
c
h
i
t
e
c
t
u
r
e
.


 
 
 
 
 
 
 
 
B
o
t
t
o
m
 
h
a
l
f
 
i
s
 
L
L
D
 
-
 
t
h
e
 
c
l
a
s
s
e
s
 
t
h
a
t
 
r
u
n
 
i
n
s
i
d
e
 
t
h
o
s
e
 
b
o
x
e
s
.
 
S
a
m
e
 
a
p
p
,
 
t
w
o
 
v
i
e
w
s
.
 
H
o
v
e
r
 
t
o


 
 
 
 
 
 
 
 
s
e
e
 
w
h
i
c
h
 
i
n
t
e
r
v
i
e
w
 
r
o
u
n
d
 
t
e
s
t
s
 
w
h
i
c
h
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
f
a
f
a
f
a
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
/
*
 
H
L
D
 
h
a
l
f
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
o
n
M
o
u
s
e
E
n
t
e
r
=
{
(
)
 
=
>
 
s
e
t
H
o
v
e
r
S
i
d
e
(
"
h
l
d
"
)
}


 
 
 
 
 
 
 
 
 
 
o
n
M
o
u
s
e
L
e
a
v
e
=
{
(
)
 
=
>
 
s
e
t
H
o
v
e
r
S
i
d
e
(
n
u
l
l
)
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
2
2
p
x
 
2
4
p
x
 
2
4
p
x
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
"
2
p
x
 
d
a
s
h
e
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
h
o
v
e
r
S
i
d
e
 
=
=
=
 
"
h
l
d
"
 
?
 
`
i
n
s
e
t
 
0
 
0
 
0
 
2
p
x
 
$
{
H
L
D
}
`
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
"
b
o
x
-
s
h
a
d
o
w
 
0
.
2
s
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
L
e
n
s
L
a
b
e
l
 
c
o
l
o
r
=
{
H
L
D
}
 
t
e
x
t
=
"
H
L
D
 
-
 
H
I
G
H
 
L
E
V
E
L
 
D
E
S
I
G
N
"
 
d
e
t
a
i
l
=
"
S
y
s
t
e
m
 
a
r
c
h
i
t
e
c
t
u
r
e
.
 
B
o
x
e
s
,
 
a
r
r
o
w
s
,
 
d
a
t
a
 
f
l
o
w
.
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
H
L
D
C
h
a
t
D
i
a
g
r
a
m
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
L
L
D
 
h
a
l
f
 
*
/
}


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
o
n
M
o
u
s
e
E
n
t
e
r
=
{
(
)
 
=
>
 
s
e
t
H
o
v
e
r
S
i
d
e
(
"
l
l
d
"
)
}


 
 
 
 
 
 
 
 
 
 
o
n
M
o
u
s
e
L
e
a
v
e
=
{
(
)
 
=
>
 
s
e
t
H
o
v
e
r
S
i
d
e
(
n
u
l
l
)
}


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
2
2
p
x
 
2
4
p
x
 
2
4
p
x
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
p
o
s
i
t
i
o
n
:
 
"
r
e
l
a
t
i
v
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
h
o
v
e
r
S
i
d
e
 
=
=
=
 
"
l
l
d
"
 
?
 
`
i
n
s
e
t
 
0
 
0
 
0
 
2
p
x
 
$
{
L
L
D
}
`
 
:
 
"
n
o
n
e
"
,


 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
"
b
o
x
-
s
h
a
d
o
w
 
0
.
2
s
"
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
L
e
n
s
L
a
b
e
l
 
c
o
l
o
r
=
{
L
L
D
}
 
t
e
x
t
=
"
L
L
D
 
-
 
L
O
W
 
L
E
V
E
L
 
D
E
S
I
G
N
"
 
d
e
t
a
i
l
=
"
C
l
a
s
s
-
l
e
v
e
l
 
d
e
s
i
g
n
.
 
M
e
t
h
o
d
s
,
 
f
i
e
l
d
s
,
 
r
e
l
a
t
i
o
n
s
h
i
p
s
.
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
L
L
D
C
h
a
t
D
i
a
g
r
a
m
 
/
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
f
r
"
,
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
T
o
p
:
 
1
4
 
}
}
>


 
 
 
 
 
 
 
 
<
I
n
t
e
r
v
i
e
w
e
r
B
u
b
b
l
e


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
H
L
D
}


 
 
 
 
 
 
 
 
 
 
t
a
g
=
"
H
L
D
 
R
O
U
N
D
"


 
 
 
 
 
 
 
 
 
 
q
u
o
t
e
=
"
H
o
w
 
w
o
u
l
d
 
y
o
u
 
s
t
o
r
e
 
1
 
b
i
l
l
i
o
n
 
c
h
a
t
 
m
e
s
s
a
g
e
s
 
a
n
d
 
s
e
r
v
e
 
t
h
e
m
 
u
n
d
e
r
 
5
0
m
s
?
"


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
I
n
t
e
r
v
i
e
w
e
r
B
u
b
b
l
e


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
L
L
D
}


 
 
 
 
 
 
 
 
 
 
t
a
g
=
"
L
L
D
 
R
O
U
N
D
"


 
 
 
 
 
 
 
 
 
 
q
u
o
t
e
=
"
S
h
o
w
 
m
e
 
t
h
e
 
M
e
s
s
a
g
e
 
c
l
a
s
s
.
 
W
h
a
t
 
f
i
e
l
d
s
,
 
w
h
a
t
 
m
e
t
h
o
d
s
,
 
h
o
w
 
d
o
e
s
 
i
t
 
s
e
r
i
a
l
i
z
e
?
"


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
L
e
n
s
L
a
b
e
l
(
{
 
c
o
l
o
r
,
 
t
e
x
t
,
 
d
e
t
a
i
l
 
}
:
 
{
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
t
e
x
t
:
 
s
t
r
i
n
g
;
 
d
e
t
a
i
l
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
b
a
s
e
l
i
n
e
"
,
 
g
a
p
:
 
1
0
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
1
4
 
}
}
>


 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
o
l
o
r
}
1
6
`
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
3
p
x
 
1
0
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
4
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
t
e
x
t
}


 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
}
}
>
{
d
e
t
a
i
l
}
<
/
s
p
a
n
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
H
L
D
C
h
a
t
D
i
a
g
r
a
m
(
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
s
v
g
 
v
i
e
w
B
o
x
=
"
0
 
0
 
6
4
0
 
1
9
0
"
 
w
i
d
t
h
=
"
1
0
0
%
"
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
 
}
}
>


 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
h
l
d
-
a
r
r
o
w
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
6
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
6
"
 
o
r
i
e
n
t
=
"
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
0
 
0
 
L
 
1
0
 
5
 
L
 
0
 
1
0
 
z
"
 
f
i
l
l
=
"
#
9
4
a
3
b
8
"
 
/
>


 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
<
/
d
e
f
s
>




 
 
 
 
 
 
{
/
*
 
E
d
g
e
s
 
*
/
}


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
7
0
 
1
0
0
 
L
 
1
5
0
 
1
0
0
"
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
f
i
l
l
=
"
n
o
n
e
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
h
l
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
2
2
0
 
1
0
0
 
L
 
3
0
0
 
1
0
0
"
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
f
i
l
l
=
"
n
o
n
e
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
h
l
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
3
7
0
 
1
0
0
 
L
 
4
5
0
 
1
0
0
"
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
f
i
l
l
=
"
n
o
n
e
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
h
l
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
3
7
0
 
1
0
0
 
L
 
4
5
0
 
1
6
0
"
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
f
i
l
l
=
"
n
o
n
e
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
h
l
d
-
a
r
r
o
w
)
"
 
/
>


 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
 
5
2
0
 
1
0
0
 
L
 
6
0
0
 
1
0
0
"
 
s
t
r
o
k
e
=
"
#
9
4
a
3
b
8
"
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
f
i
l
l
=
"
n
o
n
e
"
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
h
l
d
-
a
r
r
o
w
)
"
 
/
>




 
 
 
 
 
 
{
/
*
 
A
n
i
m
a
t
e
d
 
d
o
t
 
(
t
h
e
 
m
e
s
s
a
g
e
)
 
*
/
}


 
 
 
 
 
 
<
c
i
r
c
l
e
 
r
=
"
4
"
 
f
i
l
l
=
{
H
L
D
}
>


 
 
 
 
 
 
 
 
<
a
n
i
m
a
t
e
M
o
t
i
o
n
 
d
u
r
=
"
3
.
5
s
"
 
r
e
p
e
a
t
C
o
u
n
t
=
"
i
n
d
e
f
i
n
i
t
e
"
 
p
a
t
h
=
"
M
 
7
0
 
1
0
0
 
L
 
1
5
0
 
1
0
0
 
L
 
2
2
0
 
1
0
0
 
L
 
3
0
0
 
1
0
0
 
L
 
3
7
0
 
1
0
0
 
L
 
4
5
0
 
1
0
0
 
L
 
5
2
0
 
1
0
0
 
L
 
6
0
0
 
1
0
0
"
 
/
>


 
 
 
 
 
 
<
/
c
i
r
c
l
e
>




 
 
 
 
 
 
{
/
*
 
N
o
d
e
s
 
*
/
}


 
 
 
 
 
 
<
H
L
D
N
o
d
e
 
x
=
{
2
0
}
 
y
=
{
8
0
}
 
w
=
{
5
0
}
 
l
a
b
e
l
=
"
P
h
o
n
e
"
 
s
u
b
=
"
u
s
e
r
"
 
/
>


 
 
 
 
 
 
<
H
L
D
N
o
d
e
 
x
=
{
1
5
0
}
 
y
=
{
8
0
}
 
w
=
{
7
0
}
 
l
a
b
e
l
=
"
L
B
"
 
s
u
b
=
"
l
o
a
d
 
b
a
l
a
n
c
e
r
"
 
/
>


 
 
 
 
 
 
<
H
L
D
N
o
d
e
 
x
=
{
3
0
0
}
 
y
=
{
8
0
}
 
w
=
{
7
0
}
 
l
a
b
e
l
=
"
c
h
a
t
-
s
v
c
"
 
s
u
b
=
"
s
e
r
v
i
c
e
"
 
/
>


 
 
 
 
 
 
<
H
L
D
N
o
d
e
 
x
=
{
4
5
0
}
 
y
=
{
8
0
}
 
w
=
{
7
0
}
 
l
a
b
e
l
=
"
q
u
e
u
e
"
 
s
u
b
=
"
K
a
f
k
a
"
 
/
>


 
 
 
 
 
 
<
H
L
D
N
o
d
e
 
x
=
{
4
5
0
}
 
y
=
{
1
4
0
}
 
w
=
{
7
0
}
 
l
a
b
e
l
=
"
D
B
"
 
s
u
b
=
"
C
a
s
s
a
n
d
r
a
"
 
/
>


 
 
 
 
 
 
<
H
L
D
N
o
d
e
 
x
=
{
6
0
0
}
 
y
=
{
8
0
}
 
w
=
{
3
0
}
 
l
a
b
e
l
=
"
F
a
n
o
u
t
"
 
s
u
b
=
"
w
o
r
k
e
r
"
 
s
m
a
l
l
 
/
>


 
 
 
 
<
/
s
v
g
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
H
L
D
N
o
d
e
(
{
 
x
,
 
y
,
 
w
,
 
l
a
b
e
l
,
 
s
u
b
,
 
s
m
a
l
l
 
}
:
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
;
 
w
:
 
n
u
m
b
e
r
;
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
s
u
b
:
 
s
t
r
i
n
g
;
 
s
m
a
l
l
?
:
 
b
o
o
l
e
a
n
 
}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
<
r
e
c
t
 
w
i
d
t
h
=
{
w
}
 
h
e
i
g
h
t
=
"
4
0
"
 
r
x
=
"
6
"
 
f
i
l
l
=
{
H
L
D
_
S
O
F
T
}
 
s
t
r
o
k
e
=
{
H
L
D
}
 
s
t
r
o
k
e
W
i
d
t
h
=
"
1
.
5
"
 
/
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
"
1
8
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
f
o
n
t
S
i
z
e
=
{
s
m
a
l
l
 
?
 
"
9
"
 
:
 
"
1
1
"
}
 
f
o
n
t
W
e
i
g
h
t
=
"
7
0
0
"
 
f
o
n
t
F
a
m
i
l
y
=
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
m
o
n
o
s
p
a
c
e
'
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
w
 
/
 
2
}
 
y
=
"
3
2
"
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"
 
f
i
l
l
=
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
 
f
o
n
t
S
i
z
e
=
"
8
"
 
f
o
n
t
F
a
m
i
l
y
=
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
m
o
n
o
s
p
a
c
e
'
>


 
 
 
 
 
 
 
 
{
s
u
b
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
<
/
g
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
L
L
D
C
h
a
t
D
i
a
g
r
a
m
(
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
1
4
,
 
f
l
e
x
W
r
a
p
:
 
"
w
r
a
p
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
c
e
n
t
e
r
"
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
C
l
a
s
s
B
o
x


 
 
 
 
 
 
 
 
n
a
m
e
=
"
U
s
e
r
"


 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
L
L
D
}


 
 
 
 
 
 
 
 
f
i
e
l
d
s
=
{
[
"
i
d
:
 
s
t
r
i
n
g
"
,
 
"
n
a
m
e
:
 
s
t
r
i
n
g
"
,
 
"
a
v
a
t
a
r
:
 
s
t
r
i
n
g
"
]
}


 
 
 
 
 
 
 
 
m
e
t
h
o
d
s
=
{
[
"
s
e
n
d
M
e
s
s
a
g
e
(
c
h
a
t
,
 
t
e
x
t
)
"
]
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
C
l
a
s
s
B
o
x


 
 
 
 
 
 
 
 
n
a
m
e
=
"
C
h
a
t
"


 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
L
L
D
}


 
 
 
 
 
 
 
 
f
i
e
l
d
s
=
{
[
"
i
d
:
 
s
t
r
i
n
g
"
,
 
"
p
a
r
t
i
c
i
p
a
n
t
s
:
 
U
s
e
r
[
]
"
,
 
"
c
r
e
a
t
e
d
A
t
:
 
D
a
t
e
"
]
}


 
 
 
 
 
 
 
 
m
e
t
h
o
d
s
=
{
[
"
a
d
d
P
a
r
t
i
c
i
p
a
n
t
(
u
)
"
,
 
"
h
i
s
t
o
r
y
(
)
:
 
M
e
s
s
a
g
e
[
]
"
]
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
C
l
a
s
s
B
o
x


 
 
 
 
 
 
 
 
n
a
m
e
=
"
M
e
s
s
a
g
e
"


 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
L
L
D
}


 
 
 
 
 
 
 
 
f
i
e
l
d
s
=
{
[
"
i
d
:
 
s
t
r
i
n
g
"
,
 
"
s
e
n
d
e
r
:
 
U
s
e
r
"
,
 
"
t
e
x
t
:
 
s
t
r
i
n
g
"
,
 
"
s
e
n
t
A
t
:
 
D
a
t
e
"
]
}


 
 
 
 
 
 
 
 
m
e
t
h
o
d
s
=
{
[
"
s
e
r
i
a
l
i
z
e
(
)
:
 
b
y
t
e
s
"
]
}


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
C
l
a
s
s
B
o
x


 
 
 
 
 
 
 
 
n
a
m
e
=
"
M
e
s
s
a
g
e
R
e
p
o
"


 
 
 
 
 
 
 
 
c
o
l
o
r
=
"
#
9
4
a
3
b
8
"


 
 
 
 
 
 
 
 
f
i
e
l
d
s
=
{
[
"
d
b
:
 
D
a
t
a
b
a
s
e
"
]
}


 
 
 
 
 
 
 
 
m
e
t
h
o
d
s
=
{
[
"
s
a
v
e
(
m
)
"
,
 
"
f
i
n
d
B
y
C
h
a
t
(
i
d
)
"
]
}


 
 
 
 
 
 
/
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
C
l
a
s
s
B
o
x
(
{
 
n
a
m
e
,
 
c
o
l
o
r
,
 
f
i
e
l
d
s
,
 
m
e
t
h
o
d
s
 
}
:
 
{
 
n
a
m
e
:
 
s
t
r
i
n
g
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
f
i
e
l
d
s
:
 
s
t
r
i
n
g
[
]
;
 
m
e
t
h
o
d
s
:
 
s
t
r
i
n
g
[
]
 
}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
c
a
r
d
H
o
v
e
r
}


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
f
f
f
"
,
 
m
i
n
W
i
d
t
h
:
 
1
7
0
,


 
 
 
 
 
 
 
 
b
o
x
S
h
a
d
o
w
:
 
"
0
 
1
p
x
 
3
p
x
 
r
g
b
a
(
0
,
0
,
0
,
0
.
0
5
)
"
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
0
p
x
"
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
o
l
o
r
}
2
2
`
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
n
a
m
e
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
0
p
x
"
,
 
b
o
r
d
e
r
B
o
t
t
o
m
:
 
`
1
p
x
 
d
a
s
h
e
d
 
$
{
c
o
l
o
r
}
5
5
`
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
 
}
}
>


 
 
 
 
 
 
 
 
{
f
i
e
l
d
s
.
m
a
p
(
(
f
)
 
=
>
 
(
<
d
i
v
 
k
e
y
=
{
f
}
>
{
f
}
<
/
d
i
v
>
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
0
p
x
"
,
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
 
}
}
>


 
 
 
 
 
 
 
 
{
m
e
t
h
o
d
s
.
m
a
p
(
(
m
)
 
=
>
 
(
<
d
i
v
 
k
e
y
=
{
m
}
>
{
m
}
<
/
d
i
v
>
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
I
n
t
e
r
v
i
e
w
e
r
B
u
b
b
l
e
(
{
 
c
o
l
o
r
,
 
t
a
g
,
 
q
u
o
t
e
 
}
:
 
{
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
t
a
g
:
 
s
t
r
i
n
g
;
 
q
u
o
t
e
:
 
s
t
r
i
n
g
 
}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
5
5
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
o
l
o
r
}
0
c
`
,


 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
t
a
g
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
f
o
n
t
S
t
y
l
e
:
 
"
i
t
a
l
i
c
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
 
}
}
>


 
 
 
 
 
 
 
 
&
l
d
q
u
o
;
{
q
u
o
t
e
}
&
r
d
q
u
o
;


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
S
o
r
t
 
t
h
e
 
q
u
e
s
t
i
o
n
:
 
d
r
a
g
-
t
o
-
b
u
c
k
e
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




i
n
t
e
r
f
a
c
e
 
Q
u
e
s
t
i
o
n
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
t
e
x
t
:
 
s
t
r
i
n
g
;


 
 
c
o
r
r
e
c
t
:
 
"
H
L
D
"
 
|
 
"
L
L
D
"
;


 
 
e
x
p
l
a
i
n
:
 
s
t
r
i
n
g
;


}




c
o
n
s
t
 
Q
U
E
S
T
I
O
N
S
:
 
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
{
 
i
d
:
 
1
,
 
t
e
x
t
:
 
"
D
e
s
i
g
n
 
a
 
p
a
r
k
i
n
g
 
l
o
t
.
"
,
 
c
o
r
r
e
c
t
:
 
"
L
L
D
"
,
 
e
x
p
l
a
i
n
:
 
"
C
l
a
s
s
i
c
 
m
a
c
h
i
n
e
-
c
o
d
i
n
g
 
r
o
u
n
d
.
 
Y
o
u
 
w
r
i
t
e
 
t
h
e
 
V
e
h
i
c
l
e
,
 
S
l
o
t
,
 
T
i
c
k
e
t
 
c
l
a
s
s
e
s
.
"
 
}
,


 
 
{
 
i
d
:
 
2
,
 
t
e
x
t
:
 
"
H
o
w
 
w
o
u
l
d
 
y
o
u
 
s
t
o
r
e
 
1
 
b
i
l
l
i
o
n
 
U
b
e
r
 
r
i
d
e
s
?
"
,
 
c
o
r
r
e
c
t
:
 
"
H
L
D
"
,
 
e
x
p
l
a
i
n
:
 
"
S
h
a
r
d
i
n
g
 
s
t
r
a
t
e
g
y
,
 
s
t
o
r
a
g
e
 
e
n
g
i
n
e
 
c
h
o
i
c
e
.
 
P
u
r
e
 
a
r
c
h
i
t
e
c
t
u
r
e
 
q
u
e
s
t
i
o
n
.
"
 
}
,


 
 
{
 
i
d
:
 
3
,
 
t
e
x
t
:
 
"
W
r
i
t
e
 
t
h
e
 
U
s
e
r
 
c
l
a
s
s
 
f
o
r
 
a
n
 
a
u
t
h
 
s
y
s
t
e
m
.
"
,
 
c
o
r
r
e
c
t
:
 
"
L
L
D
"
,
 
e
x
p
l
a
i
n
:
 
"
C
l
a
s
s
-
l
e
v
e
l
 
-
 
f
i
e
l
d
s
,
 
m
e
t
h
o
d
s
,
 
i
n
v
a
r
i
a
n
t
s
.
 
L
L
D
.
"
 
}
,


 
 
{
 
i
d
:
 
4
,
 
t
e
x
t
:
 
"
H
o
w
 
d
o
 
y
o
u
 
p
r
e
v
e
n
t
 
m
e
s
s
a
g
e
 
l
o
s
s
 
i
f
 
a
 
c
h
a
t
 
s
e
r
v
e
r
 
c
r
a
s
h
e
s
?
"
,
 
c
o
r
r
e
c
t
:
 
"
H
L
D
"
,
 
e
x
p
l
a
i
n
:
 
"
D
u
r
a
b
l
e
 
q
u
e
u
e
,
 
r
e
p
l
i
c
a
t
i
o
n
,
 
a
c
k
n
o
w
l
e
d
g
e
m
e
n
t
s
.
 
H
L
D
 
t
e
r
r
i
t
o
r
y
.
"
 
}
,


 
 
{
 
i
d
:
 
5
,
 
t
e
x
t
:
 
"
I
m
p
l
e
m
e
n
t
 
a
n
 
L
R
U
 
c
a
c
h
e
 
f
r
o
m
 
s
c
r
a
t
c
h
.
"
,
 
c
o
r
r
e
c
t
:
 
"
L
L
D
"
,
 
e
x
p
l
a
i
n
:
 
"
Y
e
s
,
 
r
e
a
l
l
y
 
-
 
L
R
U
 
i
s
 
a
l
m
o
s
t
 
a
l
w
a
y
s
 
a
s
k
e
d
 
a
s
 
m
a
c
h
i
n
e
 
c
o
d
i
n
g
.
 
Y
o
u
 
i
m
p
l
e
m
e
n
t
 
t
h
e
 
c
l
a
s
s
.
"
 
}
,


 
 
{
 
i
d
:
 
6
,
 
t
e
x
t
:
 
"
D
e
s
i
g
n
 
t
h
e
 
d
a
t
a
 
f
l
o
w
 
f
o
r
 
a
 
n
e
w
s
 
f
e
e
d
 
t
h
a
t
 
f
a
n
s
 
o
u
t
 
t
o
 
1
0
M
 
f
o
l
l
o
w
e
r
s
.
"
,
 
c
o
r
r
e
c
t
:
 
"
H
L
D
"
,
 
e
x
p
l
a
i
n
:
 
"
P
u
s
h
 
v
s
 
p
u
l
l
,
 
m
a
t
e
r
i
a
l
i
z
e
d
 
v
i
e
w
s
,
 
f
a
n
o
u
t
 
q
u
e
u
e
s
.
 
H
L
D
.
"
 
}
,


 
 
{
 
i
d
:
 
7
,
 
t
e
x
t
:
 
"
M
o
d
e
l
 
t
h
e
 
r
e
l
a
t
i
o
n
s
h
i
p
s
 
b
e
t
w
e
e
n
 
O
r
d
e
r
,
 
P
r
o
d
u
c
t
,
 
a
n
d
 
U
s
e
r
 
i
n
 
a
n
 
e
-
c
o
m
m
e
r
c
e
 
L
L
D
 
r
o
u
n
d
.
"
,
 
c
o
r
r
e
c
t
:
 
"
L
L
D
"
,
 
e
x
p
l
a
i
n
:
 
"
C
l
a
s
s
 
d
i
a
g
r
a
m
,
 
c
a
r
d
i
n
a
l
i
t
y
,
 
m
e
t
h
o
d
s
.
 
L
L
D
.
"
 
}
,


 
 
{
 
i
d
:
 
8
,
 
t
e
x
t
:
 
"
W
h
i
c
h
 
d
a
t
a
b
a
s
e
 
d
o
 
y
o
u
 
p
i
c
k
 
f
o
r
 
a
 
r
i
d
e
-
l
o
c
a
t
i
o
n
-
e
v
e
r
y
-
4
-
s
e
c
o
n
d
s
 
w
r
i
t
e
 
p
a
t
t
e
r
n
?
"
,
 
c
o
r
r
e
c
t
:
 
"
H
L
D
"
,
 
e
x
p
l
a
i
n
:
 
"
W
r
i
t
e
-
o
p
t
i
m
i
z
e
d
 
s
t
o
r
a
g
e
 
c
h
o
i
c
e
.
 
H
L
D
 
t
r
a
d
e
o
f
f
 
q
u
e
s
t
i
o
n
.
"
 
}
,


]
;




f
u
n
c
t
i
o
n
 
D
r
a
g
S
o
r
t
e
r
(
)
 
{


 
 
c
o
n
s
t
 
[
p
l
a
c
e
m
e
n
t
s
,
 
s
e
t
P
l
a
c
e
m
e
n
t
s
]
 
=
 
u
s
e
S
t
a
t
e
<
R
e
c
o
r
d
<
n
u
m
b
e
r
,
 
"
H
L
D
"
 
|
 
"
L
L
D
"
 
|
 
n
u
l
l
>
>
(
{
}
)
;




 
 
f
u
n
c
t
i
o
n
 
p
l
a
c
e
(
i
d
:
 
n
u
m
b
e
r
,
 
s
i
d
e
:
 
"
H
L
D
"
 
|
 
"
L
L
D
"
)
 
{


 
 
 
 
s
e
t
P
l
a
c
e
m
e
n
t
s
(
(
p
)
 
=
>
 
(
{
 
.
.
.
p
,
 
[
i
d
]
:
 
s
i
d
e
 
}
)
)
;


 
 
}




 
 
f
u
n
c
t
i
o
n
 
r
e
s
e
t
(
)
 
{
 
s
e
t
P
l
a
c
e
m
e
n
t
s
(
{
}
)
;
 
}




 
 
c
o
n
s
t
 
c
o
r
r
e
c
t
 
=
 
O
b
j
e
c
t
.
e
n
t
r
i
e
s
(
p
l
a
c
e
m
e
n
t
s
)
.
f
i
l
t
e
r
(
(
[
i
d
,
 
s
i
d
e
]
)
 
=
>
 
Q
U
E
S
T
I
O
N
S
.
f
i
n
d
(
(
q
)
 
=
>
 
q
.
i
d
 
=
=
=
 
N
u
m
b
e
r
(
i
d
)
)
?
.
c
o
r
r
e
c
t
 
=
=
=
 
s
i
d
e
)
.
l
e
n
g
t
h
;


 
 
c
o
n
s
t
 
t
o
t
a
l
 
=
 
O
b
j
e
c
t
.
v
a
l
u
e
s
(
p
l
a
c
e
m
e
n
t
s
)
.
f
i
l
t
e
r
(
B
o
o
l
e
a
n
)
.
l
e
n
g
t
h
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
S
o
r
t
 
t
h
e
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
R
e
a
l
 
q
u
e
s
t
i
o
n
s
 
f
r
o
m
 
r
e
a
l
 
r
o
u
n
d
s
.
 
C
l
i
c
k
 
<
s
t
r
o
n
g
>
H
L
D
<
/
s
t
r
o
n
g
>
 
o
r
 
<
s
t
r
o
n
g
>
L
L
D
<
/
s
t
r
o
n
g
>
 
o
n
 
e
a
c
h
.


 
 
 
 
 
 
 
 
S
o
m
e
 
a
r
e
 
d
e
l
i
b
e
r
a
t
e
l
y
 
t
r
i
c
k
y
 
-
 
k
e
e
p
 
t
h
e
 
r
u
l
e
 
o
f
 
t
h
u
m
b
 
i
n
 
m
i
n
d
:


 
 
 
 
 
 
 
 
<
e
m
>
 
I
f
 
t
h
e
 
a
n
s
w
e
r
 
f
i
t
s
 
i
n
 
o
n
e
 
p
r
o
c
e
s
s
,
 
i
t
 
i
s
 
L
L
D
.
 
I
f
 
i
t
 
s
p
a
n
s
 
m
u
l
t
i
p
l
e
 
m
a
c
h
i
n
e
s
,
 
i
t
 
i
s
 
H
L
D
.
<
/
e
m
>


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
a
p
:
 
1
0
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
Q
U
E
S
T
I
O
N
S
.
m
a
p
(
(
q
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
l
a
c
e
d
 
=
 
p
l
a
c
e
m
e
n
t
s
[
q
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
C
o
r
r
e
c
t
 
=
 
p
l
a
c
e
d
 
?
 
p
l
a
c
e
d
 
=
=
=
 
q
.
c
o
r
r
e
c
t
 
:
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
q
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
y
o
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
c
a
r
d
-
e
n
g
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
L
e
f
t
:
 
i
s
C
o
r
r
e
c
t
 
=
=
=
 
n
u
l
l
 
?
 
u
n
d
e
f
i
n
e
d
 
:
 
`
3
p
x
 
s
o
l
i
d
 
$
{
i
s
C
o
r
r
e
c
t
 
?
 
"
#
2
2
c
5
5
e
"
 
:
 
"
#
8
4
c
c
1
6
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
:
 
2
8
,
 
h
e
i
g
h
t
:
 
2
8
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
p
l
a
c
e
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
f
1
f
5
f
9
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
q
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
&
l
d
q
u
o
;
{
q
.
t
e
x
t
}
&
r
d
q
u
o
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
l
a
c
e
d
 
!
=
=
 
u
n
d
e
f
i
n
e
d
 
&
&
 
p
l
a
c
e
d
 
!
=
=
 
n
u
l
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
h
e
i
g
h
t
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
o
p
a
c
i
t
y
:
 
1
,
 
h
e
i
g
h
t
:
 
"
a
u
t
o
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
h
e
i
g
h
t
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
m
a
r
g
i
n
T
o
p
:
 
4
,
 
o
v
e
r
f
l
o
w
:
 
"
h
i
d
d
e
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
i
s
C
o
r
r
e
c
t
 
?
 
"
#
1
6
a
3
4
a
"
 
:
 
"
#
d
c
2
6
2
6
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
o
r
r
e
c
t
 
?
 
<
C
h
e
c
k
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
 
i
n
l
i
n
e
"
 
/
>
 
:
 
<
X
 
c
l
a
s
s
N
a
m
e
=
"
w
-
3
.
5
 
h
-
3
.
5
 
i
n
l
i
n
e
"
 
/
>
}
 
{
q
.
e
x
p
l
a
i
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
6
,
 
f
l
e
x
S
h
r
i
n
k
:
 
0
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
c
k
e
t
B
t
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
H
L
D
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
H
L
D
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
p
l
a
c
e
d
 
=
=
=
 
"
H
L
D
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
p
l
a
c
e
(
q
.
i
d
,
 
"
H
L
D
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
B
u
c
k
e
t
B
t
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
L
L
D
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
=
{
L
L
D
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e
=
{
p
l
a
c
e
d
 
=
=
=
 
"
L
L
D
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
p
l
a
c
e
(
q
.
i
d
,
 
"
L
L
D
"
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
{
t
o
t
a
l
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
6
,
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
v
a
r
(
-
-
e
n
g
-
s
u
r
f
a
c
e
)
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,
 
g
a
p
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
8
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
l
e
x
:
 
1
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
t
r
o
n
g
>
{
c
o
r
r
e
c
t
}
<
/
s
t
r
o
n
g
>
 
c
o
r
r
e
c
t
 
o
u
t
 
o
f
 
<
s
t
r
o
n
g
>
{
t
o
t
a
l
}
<
/
s
t
r
o
n
g
>
 
a
n
s
w
e
r
e
d
.


 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
r
r
e
c
t
 
=
=
=
 
Q
U
E
S
T
I
O
N
S
.
l
e
n
g
t
h
 
&
&
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
#
1
6
a
3
4
a
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
m
a
r
g
i
n
L
e
f
t
:
 
8
 
}
}
>
P
e
r
f
e
c
t
!
<
/
s
p
a
n
>
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
r
e
s
e
t
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
b
t
n
-
e
n
g
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
4
p
x
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
r
e
m
"
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
R
e
s
e
t


 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
B
u
c
k
e
t
B
t
n
(
{
 
l
a
b
e
l
,
 
c
o
l
o
r
,
 
a
c
t
i
v
e
,
 
o
n
C
l
i
c
k
 
}
:
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
a
c
t
i
v
e
:
 
b
o
o
l
e
a
n
;
 
o
n
C
l
i
c
k
:
 
(
)
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
o
n
C
l
i
c
k
}


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
5
e
m
"
,


 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
6
p
x
 
1
2
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,
 
c
u
r
s
o
r
:
 
"
p
o
i
n
t
e
r
"
,


 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
a
c
t
i
v
e
 
?
 
c
o
l
o
r
 
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
"
#
f
f
f
"
 
:
 
c
o
l
o
r
,


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
,


 
 
 
 
 
 
 
 
t
r
a
n
s
i
t
i
o
n
:
 
"
a
l
l
 
0
.
1
5
s
"
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
{
l
a
b
e
l
}


 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
R
u
l
e
s
 
o
f
 
t
h
u
m
b
 
+
 
c
h
e
a
t
s
h
e
e
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




f
u
n
c
t
i
o
n
 
C
h
e
a
t
s
h
e
e
t
(
)
 
{


 
 
c
o
n
s
t
 
r
u
l
e
s
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
I
f
 
t
h
e
 
a
n
s
w
e
r
 
f
i
t
s
 
i
n
 
o
n
e
 
p
r
o
c
e
s
s
,
 
i
t
 
i
s
 
L
L
D
.
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
L
L
D
 
q
u
e
s
t
i
o
n
s
 
h
a
v
e
 
a
 
c
o
m
p
i
l
e
 
t
a
r
g
e
t
 
-
 
y
o
u
 
c
o
u
l
d
 
a
c
t
u
a
l
l
y
 
w
r
i
t
e
 
t
h
e
 
c
o
d
e
 
f
r
o
m
 
y
o
u
r
 
w
h
i
t
e
b
o
a
r
d
.
 
H
L
D
 
q
u
e
s
t
i
o
n
s
 
d
o
 
n
o
t
;
 
y
o
u
 
c
a
n
n
o
t
 
c
o
m
p
i
l
e
 
&
l
d
q
u
o
;
a
 
C
D
N
.
&
r
d
q
u
o
;
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
I
f
 
y
o
u
 
a
r
e
 
d
r
a
w
i
n
g
 
b
o
x
e
s
 
c
o
n
n
e
c
t
e
d
 
b
y
 
a
r
r
o
w
s
,
 
i
t
 
i
s
 
H
L
D
.
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
I
f
 
y
o
u
 
a
r
e
 
d
r
a
w
i
n
g
 
r
e
c
t
a
n
g
l
e
s
 
w
i
t
h
 
f
i
e
l
d
 
n
a
m
e
s
 
a
n
d
 
m
e
t
h
o
d
 
s
i
g
n
a
t
u
r
e
s
,
 
i
t
 
i
s
 
L
L
D
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
H
L
D
 
i
s
 
a
b
o
u
t
 
w
h
a
t
 
t
o
 
c
h
o
o
s
e
;
 
L
L
D
 
i
s
 
a
b
o
u
t
 
h
o
w
 
t
o
 
s
t
r
u
c
t
u
r
e
.
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
H
L
D
:
 
P
o
s
t
g
r
e
s
 
o
r
 
D
y
n
a
m
o
D
B
?
 
L
L
D
:
 
h
o
w
 
s
h
o
u
l
d
 
t
h
e
 
R
e
p
o
s
i
t
o
r
y
 
c
l
a
s
s
 
e
x
p
o
s
e
 
f
i
n
d
(
)
 
-
 
b
y
 
I
D
,
 
b
y
 
f
i
l
t
e
r
,
 
b
o
t
h
?
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
S
a
m
e
 
p
r
o
b
l
e
m
 
c
a
n
 
b
e
 
a
s
k
e
d
 
b
o
t
h
 
w
a
y
s
.
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
&
l
d
q
u
o
;
D
e
s
i
g
n
 
a
 
c
h
a
t
 
a
p
p
&
r
d
q
u
o
;
 
a
t
 
G
o
o
g
l
e
 
=
 
H
L
D
.
 
&
l
d
q
u
o
;
D
e
s
i
g
n
 
t
h
e
 
m
e
s
s
a
g
e
 
m
o
d
e
l
 
f
o
r
 
a
 
c
h
a
t
 
a
p
p
&
r
d
q
u
o
;
 
a
t
 
F
l
i
p
k
a
r
t
 
=
 
L
L
D
.
 
R
e
a
d
 
t
h
e
 
r
o
o
m
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
t
i
t
l
e
:
 
"
L
L
D
 
r
o
u
n
d
s
 
t
e
s
t
 
O
O
P
 
f
l
u
e
n
c
y
.
 
H
L
D
 
r
o
u
n
d
s
 
t
e
s
t
 
d
i
s
t
r
i
b
u
t
e
d
-
s
y
s
t
e
m
s
 
f
l
u
e
n
c
y
.
"
,


 
 
 
 
 
 
b
o
d
y
:
 
"
T
h
a
t
 
i
s
 
w
h
y
 
t
h
i
s
 
t
r
a
c
k
 
h
a
s
 
s
e
p
a
r
a
t
e
 
l
e
v
e
l
-
g
r
o
u
p
s
 
f
o
r
 
e
a
c
h
 
-
 
t
h
e
 
s
k
i
l
l
s
 
r
e
a
l
l
y
 
d
o
 
d
i
f
f
e
r
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
T
i
t
l
e
}
>
R
u
l
e
s
 
o
f
 
t
h
u
m
b
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
B
e
f
o
r
e
 
a
n
y
 
e
x
a
m
,
 
k
e
e
p
 
t
h
e
s
e
 
f
i
v
e
 
r
u
l
e
s
 
i
n
 
y
o
u
r
 
h
e
a
d
.
 
T
h
e
y
 
w
i
l
l
 
c
o
r
r
e
c
t
l
y
 
c
l
a
s
s
i
f
y
 
t
h
e
 
v
a
s
t


 
 
 
 
 
 
 
 
m
a
j
o
r
i
t
y
 
o
f
 
q
u
e
s
t
i
o
n
s
.


 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
a
p
:
 
1
0
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
r
u
l
e
s
.
m
a
p
(
(
r
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
c
a
r
d
H
o
v
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
c
a
r
d
-
e
n
g
"


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,
 
g
a
p
:
 
1
2
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
s
t
a
r
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
S
h
r
i
n
k
:
 
0
,
 
w
i
d
t
h
:
 
2
8
,
 
h
e
i
g
h
t
:
 
2
8
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
S
D
,
 
c
o
l
o
r
:
 
"
#
f
f
f
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
p
l
a
c
e
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
8
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
 
+
 
1
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
3
5
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
r
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
 
d
a
n
g
e
r
o
u
s
l
y
S
e
t
I
n
n
e
r
H
T
M
L
=
{
{
 
_
_
h
t
m
l
:
 
r
.
b
o
d
y
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>




 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
s
t
a
g
g
e
r
C
o
n
t
a
i
n
e
r
}


 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
s
h
o
w
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
g
r
i
d
"
,
 
g
r
i
d
T
e
m
p
l
a
t
e
C
o
l
u
m
n
s
:
 
"
1
f
r
 
1
f
r
"
,
 
g
a
p
:
 
1
2
,
 
m
a
r
g
i
n
T
o
p
:
 
1
8
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
C
o
m
p
a
r
e
C
a
r
d
 
c
o
l
o
r
=
{
H
L
D
}
 
t
i
t
l
e
=
"
H
L
D
 
a
s
k
s
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
W
h
a
t
 
s
e
r
v
i
c
e
s
 
e
x
i
s
t
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
H
o
w
 
d
o
 
t
h
e
y
 
c
o
m
m
u
n
i
c
a
t
e
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
W
h
e
r
e
 
d
o
e
s
 
d
a
t
a
 
l
i
v
e
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
H
o
w
 
d
o
 
y
o
u
 
s
c
a
l
e
 
w
h
e
n
 
t
r
a
f
f
i
c
 
1
0
x
'
s
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
W
h
a
t
 
h
a
p
p
e
n
s
 
w
h
e
n
 
a
 
c
o
m
p
o
n
e
n
t
 
f
a
i
l
s
?
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
C
o
m
p
a
r
e
C
a
r
d
>


 
 
 
 
 
 
 
 
<
C
o
m
p
a
r
e
C
a
r
d
 
c
o
l
o
r
=
{
L
L
D
}
 
t
i
t
l
e
=
"
L
L
D
 
a
s
k
s
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
W
h
a
t
 
c
l
a
s
s
e
s
 
d
o
 
y
o
u
 
n
e
e
d
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
W
h
a
t
 
a
r
e
 
t
h
e
 
f
i
e
l
d
s
 
a
n
d
 
m
e
t
h
o
d
s
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
W
h
a
t
 
a
r
e
 
t
h
e
 
r
e
l
a
t
i
o
n
s
h
i
p
s
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
H
o
w
 
d
o
 
y
o
u
 
e
n
f
o
r
c
e
 
i
n
v
a
r
i
a
n
t
s
?
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
W
h
i
c
h
 
d
e
s
i
g
n
 
p
a
t
t
e
r
n
s
 
a
p
p
l
y
?
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
C
o
m
p
a
r
e
C
a
r
d
>


 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




f
u
n
c
t
i
o
n
 
C
o
m
p
a
r
e
C
a
r
d
(
{
 
c
o
l
o
r
,
 
t
i
t
l
e
,
 
c
h
i
l
d
r
e
n
 
}
:
 
{
 
c
o
l
o
r
:
 
s
t
r
i
n
g
;
 
t
i
t
l
e
:
 
s
t
r
i
n
g
;
 
c
h
i
l
d
r
e
n
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
 
}
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
c
a
r
d
E
n
t
r
a
n
c
e
}


 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
c
a
r
d
H
o
v
e
r
}


 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
5
5
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
o
l
o
r
}
0
8
`
,


 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,


 
 
 
 
 
 
}
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
f
o
n
t
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
f
o
n
t
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,


 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
t
i
t
l
e
.
t
o
U
p
p
e
r
C
a
s
e
(
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
u
l
 
s
t
y
l
e
=
{
{
 
m
a
r
g
i
n
:
 
0
,
 
p
a
d
d
i
n
g
L
e
f
t
:
 
1
8
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
5
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
 
}
}
>


 
 
 
 
 
 
 
 
{
c
h
i
l
d
r
e
n
}


 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
<
/
m
o
t
i
o
n
.
d
i
v
>


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
S
D
_
L
1
_
H
L
D
v
s
L
L
D
A
c
t
i
v
i
t
y
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
 
}
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
E
n
g
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
s
p
l
i
t
"
,
 
l
a
b
e
l
:
 
"
T
w
o
 
L
e
n
s
e
s
"
,
 
i
c
o
n
:
 
<
G
i
t
C
o
m
p
a
r
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
S
p
l
i
t
C
a
n
v
a
s
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
s
o
r
t
"
,
 
l
a
b
e
l
:
 
"
S
o
r
t
 
Q
u
e
s
t
i
o
n
s
"
,
 
i
c
o
n
:
 
<
S
h
u
f
f
l
e
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
D
r
a
g
S
o
r
t
e
r
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
r
u
l
e
s
"
,
 
l
a
b
e
l
:
 
"
R
u
l
e
s
 
o
f
 
T
h
u
m
b
"
,
 
i
c
o
n
:
 
<
B
o
x
e
s
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
C
h
e
a
t
s
h
e
e
t
 
/
>
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
E
n
g
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
t
e
r
v
i
e
w
e
r
:
 
&
l
d
q
u
o
;
I
m
p
l
e
m
e
n
t
 
a
 
t
h
r
e
a
d
-
s
a
f
e
 
i
n
-
m
e
m
o
r
y
 
L
R
U
 
c
a
c
h
e
 
c
l
a
s
s
 
w
i
t
h
 
g
e
t
(
k
e
y
)
 
a
n
d
 
p
u
t
(
k
e
y
,
 
v
a
l
u
e
)
.
&
r
d
q
u
o
;
 
W
h
a
t
 
k
i
n
d
 
o
f
 
r
o
u
n
d
 
i
s
 
t
h
i
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
H
L
D
"
,
 
"
L
L
D
"
,
 
"
C
o
d
i
n
g
 
/
 
D
S
A
"
,
 
"
B
e
h
a
v
i
o
r
a
l
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
S
i
n
g
l
e
-
p
r
o
c
e
s
s
 
c
l
a
s
s
 
d
e
s
i
g
n
 
w
i
t
h
 
m
e
t
h
o
d
s
 
a
n
d
 
i
n
v
a
r
i
a
n
t
s
 
-
 
p
u
r
e
 
L
L
D
.
 
E
v
e
n
 
t
h
o
u
g
h
 
i
t
 
f
e
e
l
s
 
a
l
g
o
r
i
t
h
m
i
c
,
 
t
h
e
 
i
n
t
e
r
v
i
e
w
e
r
 
i
s
 
t
e
s
t
i
n
g
 
c
l
a
s
s
 
s
t
r
u
c
t
u
r
e
,
 
c
o
n
c
u
r
r
e
n
c
y
 
g
u
a
r
d
s
,
 
a
n
d
 
i
n
t
e
r
f
a
c
e
 
d
e
s
i
g
n
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
I
n
t
e
r
v
i
e
w
e
r
:
 
&
l
d
q
u
o
;
D
e
s
i
g
n
 
W
h
a
t
s
A
p
p
'
s
 
m
e
s
s
a
g
e
 
d
e
l
i
v
e
r
y
 
s
o
 
n
o
t
h
i
n
g
 
i
s
 
l
o
s
t
 
w
h
e
n
 
a
 
p
h
o
n
e
 
i
s
 
o
f
f
l
i
n
e
 
f
o
r
 
3
 
d
a
y
s
.
&
r
d
q
u
o
;
 
T
h
i
s
 
i
s
.
.
.
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
L
L
D
"
,
 
"
C
o
d
i
n
g
"
,
 
"
H
L
D
"
,
 
"
D
a
t
a
b
a
s
e
 
r
o
u
n
d
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
D
u
r
a
b
l
e
 
q
u
e
u
e
s
,
 
r
e
t
e
n
t
i
o
n
,
 
o
f
f
l
i
n
e
 
d
e
l
i
v
e
r
y
 
-
 
a
l
l
 
c
r
o
s
s
-
s
e
r
v
i
c
e
 
c
o
n
c
e
r
n
s
.
 
H
L
D
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
s
t
a
t
e
m
e
n
t
 
i
s
 
T
R
U
E
 
a
b
o
u
t
 
H
L
D
 
v
s
 
L
L
D
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
H
L
D
 
i
s
 
h
a
r
d
e
r
 
t
h
a
n
 
L
L
D
.
"
,


 
 
 
 
 
 
 
 
"
L
L
D
 
i
s
 
h
a
r
d
e
r
 
t
h
a
n
 
H
L
D
.
"
,


 
 
 
 
 
 
 
 
"
T
h
e
y
 
t
e
s
t
 
g
e
n
u
i
n
e
l
y
 
d
i
f
f
e
r
e
n
t
 
s
k
i
l
l
s
 
a
n
d
 
m
o
s
t
 
p
r
o
d
u
c
t
 
c
o
m
p
a
n
i
e
s
 
t
e
s
t
 
b
o
t
h
 
i
n
 
s
e
p
a
r
a
t
e
 
r
o
u
n
d
s
.
"
,


 
 
 
 
 
 
 
 
"
H
L
D
 
i
s
 
f
o
r
 
s
e
n
i
o
r
s
,
 
L
L
D
 
i
s
 
f
o
r
 
j
u
n
i
o
r
s
.
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
B
o
t
h
 
r
o
u
n
d
s
 
a
r
e
 
s
t
a
n
d
a
r
d
 
a
t
 
m
o
s
t
 
p
r
o
d
u
c
t
 
c
o
m
p
a
n
i
e
s
.
 
T
h
e
y
 
p
r
o
b
e
 
d
i
f
f
e
r
e
n
t
 
m
u
s
c
l
e
 
g
r
o
u
p
s
:
 
d
i
s
t
r
i
b
u
t
e
d
-
s
y
s
t
e
m
s
 
r
e
a
s
o
n
i
n
g
 
v
s
 
O
O
P
 
f
l
u
e
n
c
y
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
R
u
l
e
 
o
f
 
t
h
u
m
b
:
 
i
f
 
t
h
e
 
a
n
s
w
e
r
 
f
i
t
s
 
i
n
 
_
_
_
_
_
_
_
_
,
 
i
t
 
i
s
 
L
L
D
.
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
o
n
e
 
f
i
l
e
"
,
 
"
o
n
e
 
p
r
o
c
e
s
s
"
,
 
"
o
n
e
 
w
e
e
k
"
,
 
"
o
n
e
 
s
p
r
i
n
t
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
O
n
e
 
p
r
o
c
e
s
s
 
=
 
o
n
e
 
m
a
c
h
i
n
e
,
 
o
n
e
 
r
u
n
t
i
m
e
 
-
 
s
o
 
t
h
e
 
w
h
o
l
e
 
d
e
s
i
g
n
 
i
s
 
i
n
s
i
d
e
 
o
n
e
 
J
V
M
/
V
8
/
P
y
t
h
o
n
 
i
n
t
e
r
p
r
e
t
e
r
.
 
T
h
a
t
 
i
s
 
t
h
e
 
d
e
f
i
n
i
n
g
 
p
r
o
p
e
r
t
y
 
o
f
 
a
n
 
L
L
D
 
p
r
o
b
l
e
m
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
i
c
h
 
o
f
 
t
h
e
s
e
 
i
s
 
a
n
 
H
L
D
 
c
o
n
c
e
r
n
,
 
n
o
t
 
a
n
 
L
L
D
 
c
o
n
c
e
r
n
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
S
h
o
u
l
d
 
U
s
e
r
 
h
o
l
d
 
a
 
r
e
f
e
r
e
n
c
e
 
t
o
 
C
a
r
t
,
 
o
r
 
C
a
r
t
 
t
o
 
U
s
e
r
?
"
,


 
 
 
 
 
 
 
 
"
S
h
o
u
l
d
 
g
e
t
O
r
d
e
r
(
)
 
r
e
t
u
r
n
 
a
n
 
O
r
d
e
r
 
o
r
 
a
n
 
O
p
t
i
o
n
a
l
<
O
r
d
e
r
>
?
"
,


 
 
 
 
 
 
 
 
"
S
h
o
u
l
d
 
w
e
 
s
h
a
r
d
 
t
h
e
 
O
r
d
e
r
s
 
t
a
b
l
e
 
b
y
 
u
s
e
r
_
i
d
 
o
r
 
b
y
 
o
r
d
e
r
_
i
d
?
"
,


 
 
 
 
 
 
 
 
"
S
h
o
u
l
d
 
O
r
d
e
r
S
e
r
v
i
c
e
 
e
x
p
o
s
e
 
p
l
a
c
e
O
r
d
e
r
(
)
 
o
r
 
c
r
e
a
t
e
O
r
d
e
r
(
)
?
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
S
h
a
r
d
i
n
g
 
s
t
r
a
t
e
g
y
 
i
s
 
a
 
c
r
o
s
s
-
m
a
c
h
i
n
e
 
s
t
o
r
a
g
e
 
d
e
c
i
s
i
o
n
 
-
 
p
u
r
e
 
H
L
D
.
 
T
h
e
 
o
t
h
e
r
 
t
h
r
e
e
 
a
r
e
 
i
n
s
i
d
e
-
o
n
e
-
p
r
o
c
e
s
s
 
c
l
a
s
s
 
A
P
I
 
d
e
c
i
s
i
o
n
s
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
E
n
g
i
n
e
e
r
i
n
g
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
H
L
D
 
v
s
 
L
L
D
 
-
 
T
h
e
 
T
w
o
 
L
e
n
s
e
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
1
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
2
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
E
v
e
r
y
 
p
r
o
d
u
c
t
-
c
o
m
p
a
n
y
 
i
n
t
e
r
v
i
e
w
 
t
e
s
t
s
 
b
o
t
h
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


