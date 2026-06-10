
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
 
A
r
r
o
w
U
p
R
i
g
h
t
,
 
T
e
r
m
i
n
a
l
,
 
G
l
o
b
e
,
 
D
a
t
a
b
a
s
e
,
 
C
p
u
,
 
L
a
y
e
r
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
 
{
 
S
E
O
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
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
S
E
O
"
;


i
m
p
o
r
t
 
{
 
c
a
n
o
n
i
c
a
l
U
r
l
 
}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
l
i
b
/
s
e
o
.
u
t
i
l
s
"
;




i
n
t
e
r
f
a
c
e
 
C
h
a
l
l
e
n
g
e
 
{


 
 
i
d
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


 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
s
t
r
i
n
g
;


 
 
d
i
f
f
i
c
u
l
t
y
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
c
h
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


 
 
i
c
o
n
:
 
t
y
p
e
o
f
 
T
e
r
m
i
n
a
l
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


 
 
h
r
e
f
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
 
C
H
A
L
L
E
N
G
E
S
:
 
C
h
a
l
l
e
n
g
e
[
]
 
=
 
[


 
 
{


 
 
 
 
i
d
:
 
"
p
o
r
t
f
o
l
i
o
"
,


 
 
 
 
t
i
t
l
e
:
 
"
P
e
r
s
o
n
a
l
 
P
o
r
t
f
o
l
i
o
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
r
e
s
p
o
n
s
i
v
e
 
p
o
r
t
f
o
l
i
o
 
s
i
t
e
 
w
i
t
h
 
H
T
M
L
,
 
C
S
S
,
 
a
n
d
 
J
a
v
a
S
c
r
i
p
t
.
 
I
n
c
l
u
d
e
 
d
a
r
k
 
m
o
d
e
,
 
p
r
o
j
e
c
t
 
f
i
l
t
e
r
i
n
g
,
 
a
n
d
 
a
 
c
o
n
t
a
c
t
 
f
o
r
m
 
w
i
t
h
 
l
o
c
a
l
S
t
o
r
a
g
e
 
p
e
r
s
i
s
t
e
n
c
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
B
e
g
i
n
n
e
r
"
,


 
 
 
 
t
e
c
h
:
 
[
"
H
T
M
L
"
,
 
"
C
S
S
"
,
 
"
J
S
"
]
,


 
 
 
 
i
c
o
n
:
 
G
l
o
b
e
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
s
k
y
-
5
0
0
"
,


 
 
 
 
h
r
e
f
:
 
"
/
l
e
a
r
n
/
h
t
m
l
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
t
o
d
o
-
a
p
i
"
,


 
 
 
 
t
i
t
l
e
:
 
"
T
o
d
o
 
R
E
S
T
 
A
P
I
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
f
u
l
l
-
f
e
a
t
u
r
e
d
 
T
o
d
o
 
A
P
I
 
w
i
t
h
 
E
x
p
r
e
s
s
 
a
n
d
 
N
o
d
e
.
 
I
m
p
l
e
m
e
n
t
 
C
R
U
D
,
 
p
a
g
i
n
a
t
i
o
n
,
 
f
i
l
t
e
r
i
n
g
,
 
a
u
t
h
e
n
t
i
c
a
t
i
o
n
,
 
r
a
t
e
 
l
i
m
i
t
i
n
g
,
 
a
n
d
 
S
w
a
g
g
e
r
 
d
o
c
s
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
t
e
c
h
:
 
[
"
N
o
d
e
"
,
 
"
E
x
p
r
e
s
s
"
,
 
"
J
W
T
"
]
,


 
 
 
 
i
c
o
n
:
 
T
e
r
m
i
n
a
l
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
l
i
m
e
-
5
0
0
"
,


 
 
 
 
h
r
e
f
:
 
"
/
l
e
a
r
n
/
n
o
d
e
j
s
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
w
e
a
t
h
e
r
-
d
a
s
h
b
o
a
r
d
"
,


 
 
 
 
t
i
t
l
e
:
 
"
W
e
a
t
h
e
r
 
D
a
s
h
b
o
a
r
d
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
R
e
a
c
t
 
w
e
a
t
h
e
r
 
d
a
s
h
b
o
a
r
d
 
w
i
t
h
 
c
i
t
y
 
s
e
a
r
c
h
,
 
7
-
d
a
y
 
f
o
r
e
c
a
s
t
,
 
c
h
a
r
t
s
,
 
g
e
o
l
o
c
a
t
i
o
n
,
 
a
n
d
 
r
e
s
p
o
n
s
i
v
e
 
d
e
s
i
g
n
 
u
s
i
n
g
 
t
h
e
 
O
p
e
n
W
e
a
t
h
e
r
M
a
p
 
A
P
I
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
I
n
t
e
r
m
e
d
i
a
t
e
"
,


 
 
 
 
t
e
c
h
:
 
[
"
R
e
a
c
t
"
,
 
"
T
S
"
,
 
"
C
h
a
r
t
s
"
]
,


 
 
 
 
i
c
o
n
:
 
L
a
y
e
r
s
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
a
m
b
e
r
-
5
0
0
"
,


 
 
 
 
h
r
e
f
:
 
"
/
l
e
a
r
n
/
r
e
a
c
t
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
e
t
l
-
p
i
p
e
l
i
n
e
"
,


 
 
 
 
t
i
t
l
e
:
 
"
E
T
L
 
D
a
t
a
 
P
i
p
e
l
i
n
e
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
B
u
i
l
d
 
a
 
P
y
t
h
o
n
 
E
T
L
 
p
i
p
e
l
i
n
e
 
t
h
a
t
 
e
x
t
r
a
c
t
s
 
C
S
V
 
d
a
t
a
,
 
t
r
a
n
s
f
o
r
m
s
 
w
i
t
h
 
P
a
n
d
a
s
,
 
l
o
a
d
s
 
i
n
t
o
 
P
o
s
t
g
r
e
S
Q
L
,
 
a
n
d
 
g
e
n
e
r
a
t
e
s
 
a
n
 
H
T
M
L
 
r
e
p
o
r
t
 
w
i
t
h
 
M
a
t
p
l
o
t
l
i
b
 
c
h
a
r
t
s
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
A
d
v
a
n
c
e
d
"
,


 
 
 
 
t
e
c
h
:
 
[
"
P
y
t
h
o
n
"
,
 
"
P
a
n
d
a
s
"
,
 
"
S
Q
L
"
]
,


 
 
 
 
i
c
o
n
:
 
D
a
t
a
b
a
s
e
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
b
l
u
e
-
5
0
0
"
,


 
 
 
 
h
r
e
f
:
 
"
/
l
e
a
r
n
/
p
y
t
h
o
n
"
,


 
 
}
,


 
 
{


 
 
 
 
i
d
:
 
"
n
f
t
-
m
a
r
k
e
t
p
l
a
c
e
"
,


 
 
 
 
t
i
t
l
e
:
 
"
N
F
T
 
M
a
r
k
e
t
p
l
a
c
e
"
,


 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
:
 
"
D
e
p
l
o
y
 
a
n
 
E
R
C
-
7
2
1
 
s
m
a
r
t
 
c
o
n
t
r
a
c
t
,
 
b
u
i
l
d
 
a
 
R
e
a
c
t
 
d
A
p
p
 
w
i
t
h
 
e
t
h
e
r
s
.
j
s
,
 
a
n
d
 
i
m
p
l
e
m
e
n
t
 
m
i
n
t
i
n
g
,
 
l
i
s
t
i
n
g
,
 
b
u
y
i
n
g
,
 
a
n
d
 
I
P
F
S
 
m
e
t
a
d
a
t
a
 
s
t
o
r
a
g
e
.
"
,


 
 
 
 
d
i
f
f
i
c
u
l
t
y
:
 
"
A
d
v
a
n
c
e
d
"
,


 
 
 
 
t
e
c
h
:
 
[
"
S
o
l
i
d
i
t
y
"
,
 
"
R
e
a
c
t
"
,
 
"
I
P
F
S
"
]
,


 
 
 
 
i
c
o
n
:
 
C
p
u
,


 
 
 
 
c
o
l
o
r
:
 
"
t
e
x
t
-
p
u
r
p
l
e
-
5
0
0
"
,


 
 
 
 
h
r
e
f
:
 
"
/
l
e
a
r
n
/
b
l
o
c
k
c
h
a
i
n
"
,


 
 
}
,


]
;




c
o
n
s
t
 
D
I
F
F
I
C
U
L
T
Y
_
C
O
L
O
R
S
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
s
t
r
i
n
g
>
 
=
 
{


 
 
B
e
g
i
n
n
e
r
:
 
"
t
e
x
t
-
g
r
e
e
n
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
g
r
e
e
n
-
4
0
0
 
b
o
r
d
e
r
-
g
r
e
e
n
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
g
r
e
e
n
-
9
0
0
/
6
0
"
,


 
 
I
n
t
e
r
m
e
d
i
a
t
e
:
 
"
t
e
x
t
-
a
m
b
e
r
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
a
m
b
e
r
-
4
0
0
 
b
o
r
d
e
r
-
a
m
b
e
r
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
a
m
b
e
r
-
9
0
0
/
6
0
"
,


 
 
A
d
v
a
n
c
e
d
:
 
"
t
e
x
t
-
r
e
d
-
7
0
0
 
d
a
r
k
:
t
e
x
t
-
r
e
d
-
4
0
0
 
b
o
r
d
e
r
-
r
e
d
-
3
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
r
e
d
-
9
0
0
/
6
0
"
,


}
;




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
 
B
u
i
l
d
C
h
a
l
l
e
n
g
e
s
P
a
g
e
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
d
i
v
 
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
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
m
i
n
-
h
-
[
c
a
l
c
(
1
0
0
v
h
-
4
r
e
m
)
]
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
B
u
i
l
d
 
C
h
a
l
l
e
n
g
e
s
 
-
 
H
a
n
d
s
-
o
n
 
P
r
o
j
e
c
t
s
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
5
 
p
r
a
c
t
i
c
a
l
 
b
u
i
l
d
 
c
h
a
l
l
e
n
g
e
s
 
a
c
r
o
s
s
 
w
e
b
,
 
A
P
I
,
 
d
a
t
a
,
 
a
n
d
 
b
l
o
c
k
c
h
a
i
n
 
—
 
p
u
t
 
y
o
u
r
 
s
k
i
l
l
s
 
t
o
 
t
h
e
 
t
e
s
t
.
"


 
 
 
 
 
 
 
 
c
a
n
o
n
i
c
a
l
U
r
l
=
{
c
a
n
o
n
i
c
a
l
U
r
l
(
"
/
l
e
a
r
n
/
c
h
a
l
l
e
n
g
e
s
"
)
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
<
d
i
v
 
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
m
a
x
-
w
-
5
x
l
 
m
x
-
a
u
t
o
 
p
x
-
3
 
s
m
:
p
x
-
8
 
p
y
-
8
"
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
 
y
:
 
1
2
 
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
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
4
 
}
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
m
b
-
1
0
 
b
o
r
d
e
r
-
b
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
p
b
-
8
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
h
-
1
.
5
 
w
-
1
.
5
 
b
g
-
l
i
m
e
-
4
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
l
e
a
r
n
 
/
 
b
u
i
l
d
 
c
h
a
l
l
e
n
g
e
s


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
m
t
-
4
 
t
e
x
t
-
3
x
l
 
s
m
:
t
e
x
t
-
5
x
l
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
n
o
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
B
u
i
l
d
 
i
t
.
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
t
e
x
t
-
l
i
m
e
-
5
0
0
"
>
B
r
e
a
k
 
i
t
.
 
S
h
i
p
 
i
t
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
<
/
h
1
>


 
 
 
 
 
 
 
 
 
 
<
p
 
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
m
t
-
4
 
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
m
a
x
-
w
-
2
x
l
"
>


 
 
 
 
 
 
 
 
 
 
 
 
F
i
v
e
 
h
a
n
d
s
-
o
n
 
p
r
o
j
e
c
t
s
 
t
h
a
t
 
t
e
s
t
 
y
o
u
r
 
a
b
i
l
i
t
y
 
t
o
 
b
u
i
l
d
 
r
e
a
l
-
w
o
r
l
d
 
s
o
f
t
w
a
r
e
.


 
 
 
 
 
 
 
 
 
 
 
 
E
a
c
h
 
c
h
a
l
l
e
n
g
e
 
l
i
n
k
s
 
t
o
 
t
h
e
 
r
e
l
e
v
a
n
t
 
l
e
a
r
n
i
n
g
 
t
r
a
c
k
 
s
o
 
y
o
u
 
c
a
n
 
b
r
u
s
h
 
u
p
 
o
n
 
c
o
n
c
e
p
t
s
 
f
i
r
s
t
.


 
 
 
 
 
 
 
 
 
 
<
/
p
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
d
i
v
 
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
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
m
d
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
C
H
A
L
L
E
N
G
E
S
.
m
a
p
(
(
c
h
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
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
h
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
c
h
.
h
r
e
f
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
1
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
 
y
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
e
l
a
y
:
 
0
.
0
5
 
+
 
M
a
t
h
.
m
i
n
(
i
,
 
4
)
 
*
 
0
.
0
6
 
}
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
g
r
o
u
p
 
f
l
e
x
 
f
l
e
x
-
c
o
l
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
p
-
5
 
r
o
u
n
d
e
d
-
m
d
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
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
-
c
o
l
o
r
s
 
n
o
-
u
n
d
e
r
l
i
n
e
 
h
-
f
u
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
i
t
e
m
s
-
s
t
a
r
t
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
g
a
p
-
3
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
3
 
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
1
1
 
h
-
1
1
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
s
t
o
n
e
-
1
0
0
 
d
a
r
k
:
b
g
-
w
h
i
t
e
/
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
j
u
s
t
i
f
y
-
c
e
n
t
e
r
 
s
h
r
i
n
k
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
c
h
.
i
c
o
n
 
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
{
`
w
-
5
 
h
-
5
 
$
{
c
h
.
c
o
l
o
r
}
`
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
d
i
v
 
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
m
i
n
-
w
-
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
t
e
x
t
-
b
a
s
e
 
f
o
n
t
-
b
o
l
d
 
t
r
a
c
k
i
n
g
-
t
i
g
h
t
 
t
e
x
t
-
s
t
o
n
e
-
9
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
5
0
 
l
e
a
d
i
n
g
-
t
i
g
h
t
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
7
0
0
 
d
a
r
k
:
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
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
-
c
o
l
o
r
s
 
t
r
u
n
c
a
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
h
.
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
{
`
i
n
l
i
n
e
-
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
p
x
-
2
 
p
y
-
0
.
5
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
r
 
b
o
r
d
e
r
 
r
o
u
n
d
e
d
-
m
d
 
$
{
D
I
F
F
I
C
U
L
T
Y
_
C
O
L
O
R
S
[
c
h
.
d
i
f
f
i
c
u
l
t
y
]
 
?
?
 
"
"
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
h
.
d
i
f
f
i
c
u
l
t
y
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
U
p
R
i
g
h
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
w
-
4
 
h
-
4
 
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
t
e
x
t
-
l
i
m
e
-
5
0
0
 
g
r
o
u
p
-
h
o
v
e
r
:
-
t
r
a
n
s
l
a
t
e
-
y
-
0
.
5
 
g
r
o
u
p
-
h
o
v
e
r
:
t
r
a
n
s
l
a
t
e
-
x
-
0
.
5
 
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
-
a
l
l
 
s
h
r
i
n
k
-
0
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
p
 
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
t
e
x
t
-
s
m
 
t
e
x
t
-
s
t
o
n
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
m
b
-
4
 
f
l
e
x
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
h
.
d
e
s
c
r
i
p
t
i
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
 
f
l
e
x
-
w
r
a
p
 
g
a
p
-
1
.
5
 
m
t
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
h
.
t
e
c
h
.
m
a
p
(
(
t
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
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
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
d
a
r
k
:
t
e
x
t
-
s
t
o
n
e
-
4
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
p
x
-
2
 
p
y
-
0
.
5
 
r
o
u
n
d
e
d
-
m
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
 
{
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
a
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


