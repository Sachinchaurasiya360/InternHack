
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
E
f
f
e
c
t
,
 
u
s
e
R
e
f
,
 
u
s
e
C
a
l
l
b
a
c
k
,
 
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
 
t
o
a
s
t
 
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
u
i
/
t
o
a
s
t
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
F
a
c
e
V
i
o
l
a
t
i
o
n
 
{


 
 
t
y
p
e
:
 
"
N
O
_
F
A
C
E
"
 
|
 
"
M
U
L
T
I
P
L
E
_
F
A
C
E
S
"
;


 
 
t
i
m
e
s
t
a
m
p
:
 
s
t
r
i
n
g
;


 
 
d
u
r
a
t
i
o
n
?
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
P
r
o
c
t
o
r
W
a
r
n
i
n
g
 
{


 
 
t
y
p
e
:
 
s
t
r
i
n
g
;


 
 
m
e
s
s
a
g
e
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
m
e
s
t
a
m
p
:
 
s
t
r
i
n
g
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
P
r
o
c
t
o
r
L
o
g
 
{


 
 
t
a
b
S
w
i
t
c
h
e
s
:
 
n
u
m
b
e
r
;


 
 
f
o
c
u
s
L
o
s
s
e
s
:
 
n
u
m
b
e
r
;


 
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
:
 
n
u
m
b
e
r
;


 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
:
 
n
u
m
b
e
r
;


 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
:
 
n
u
m
b
e
r
;


 
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
:
 
n
u
m
b
e
r
;


 
 
f
a
c
e
V
i
o
l
a
t
i
o
n
s
:
 
F
a
c
e
V
i
o
l
a
t
i
o
n
[
]
;


 
 
w
a
r
n
i
n
g
s
:
 
P
r
o
c
t
o
r
W
a
r
n
i
n
g
[
]
;


 
 
t
e
r
m
i
n
a
t
e
d
:
 
b
o
o
l
e
a
n
;


 
 
t
e
r
m
i
n
a
t
i
o
n
R
e
a
s
o
n
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
c
a
m
e
r
a
E
n
a
b
l
e
d
:
 
b
o
o
l
e
a
n
;


 
 
s
n
a
p
s
h
o
t
C
o
u
n
t
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
P
r
o
c
t
o
r
S
t
a
t
e
 
{


 
 
t
a
b
S
w
i
t
c
h
e
s
:
 
n
u
m
b
e
r
;


 
 
f
o
c
u
s
L
o
s
s
e
s
:
 
n
u
m
b
e
r
;


 
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
:
 
n
u
m
b
e
r
;


 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
:
 
n
u
m
b
e
r
;


 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
:
 
n
u
m
b
e
r
;


 
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
:
 
n
u
m
b
e
r
;


 
 
f
a
c
e
V
i
o
l
a
t
i
o
n
s
:
 
F
a
c
e
V
i
o
l
a
t
i
o
n
[
]
;


 
 
i
s
F
u
l
l
s
c
r
e
e
n
:
 
b
o
o
l
e
a
n
;


 
 
t
e
r
m
i
n
a
t
e
d
:
 
b
o
o
l
e
a
n
;


 
 
t
e
r
m
i
n
a
t
i
o
n
R
e
a
s
o
n
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
s
h
o
w
F
u
l
l
s
c
r
e
e
n
W
a
r
n
i
n
g
:
 
b
o
o
l
e
a
n
;


 
 
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
R
e
m
a
i
n
i
n
g
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
P
r
o
c
t
o
r
i
n
g
C
o
n
f
i
g
 
{


 
 
e
n
a
b
l
e
d
:
 
b
o
o
l
e
a
n
;


 
 
m
a
x
T
a
b
S
w
i
t
c
h
e
s
?
:
 
n
u
m
b
e
r
;
 
 
 
 
 
 
 
 
/
/
 
d
e
f
a
u
l
t
 
3


 
 
m
a
x
F
u
l
l
s
c
r
e
e
n
E
x
i
t
s
?
:
 
n
u
m
b
e
r
;
 
 
 
 
/
/
 
d
e
f
a
u
l
t
 
2


 
 
m
a
x
D
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
?
:
 
n
u
m
b
e
r
;
 
 
 
/
/
 
d
e
f
a
u
l
t
 
2


 
 
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
S
e
c
s
?
:
 
n
u
m
b
e
r
;
 
 
 
/
/
 
d
e
f
a
u
l
t
 
1
0


 
 
o
n
T
e
r
m
i
n
a
t
e
:
 
(
r
e
a
s
o
n
:
 
s
t
r
i
n
g
)
 
=
>
 
v
o
i
d
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
o
l
a
t
i
o
n
 
p
o
i
n
t
 
w
e
i
g
h
t
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


c
o
n
s
t
 
W
E
I
G
H
T
S
 
=
 
{


 
 
t
a
b
S
w
i
t
c
h
:
 
1
5
,


 
 
f
o
c
u
s
L
o
s
s
:
 
5
,


 
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
:
 
2
0
,


 
 
d
e
v
t
o
o
l
s
:
 
2
5
,


 
 
c
o
p
y
P
a
s
t
e
:
 
1
0
,


 
 
r
i
g
h
t
C
l
i
c
k
:
 
3
,


 
 
f
a
c
e
V
i
o
l
a
t
i
o
n
:
 
1
0
,


}
 
a
s
 
c
o
n
s
t
;




c
o
n
s
t
 
M
A
X
_
T
O
T
A
L
_
S
C
O
R
E
 
=
 
6
0
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
H
o
o
k
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
u
s
e
P
r
o
c
t
o
r
i
n
g
(
c
o
n
f
i
g
:
 
P
r
o
c
t
o
r
i
n
g
C
o
n
f
i
g
)
 
{


 
 
c
o
n
s
t
 
{


 
 
 
 
e
n
a
b
l
e
d
,


 
 
 
 
m
a
x
T
a
b
S
w
i
t
c
h
e
s
 
=
 
3
,


 
 
 
 
m
a
x
F
u
l
l
s
c
r
e
e
n
E
x
i
t
s
 
=
 
2
,


 
 
 
 
m
a
x
D
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
 
=
 
2
,


 
 
 
 
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
S
e
c
s
 
=
 
1
0
,


 
 
 
 
o
n
T
e
r
m
i
n
a
t
e
,


 
 
}
 
=
 
c
o
n
f
i
g
;




 
 
/
/
 
M
u
t
a
b
l
e
 
r
e
f
s
 
f
o
r
 
e
v
e
n
t
-
h
a
n
d
l
e
r
 
a
c
c
e
s
s
 
(
a
v
o
i
d
s
 
s
t
a
l
e
 
c
l
o
s
u
r
e
s
)


 
 
c
o
n
s
t
 
t
a
b
S
w
i
t
c
h
e
s
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
f
o
c
u
s
L
o
s
s
e
s
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
f
a
c
e
V
i
o
l
a
t
i
o
n
s
R
e
f
 
=
 
u
s
e
R
e
f
<
F
a
c
e
V
i
o
l
a
t
i
o
n
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
w
a
r
n
i
n
g
s
R
e
f
 
=
 
u
s
e
R
e
f
<
P
r
o
c
t
o
r
W
a
r
n
i
n
g
[
]
>
(
[
]
)
;


 
 
c
o
n
s
t
 
t
e
r
m
i
n
a
t
e
d
R
e
f
 
=
 
u
s
e
R
e
f
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
t
e
r
m
i
n
a
t
i
o
n
R
e
a
s
o
n
R
e
f
 
=
 
u
s
e
R
e
f
<
s
t
r
i
n
g
 
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


 
 
c
o
n
s
t
 
l
a
s
t
V
i
s
i
b
i
l
i
t
y
T
s
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
g
r
a
c
e
T
i
m
e
r
R
e
f
 
=
 
u
s
e
R
e
f
<
R
e
t
u
r
n
T
y
p
e
<
t
y
p
e
o
f
 
s
e
t
I
n
t
e
r
v
a
l
>
 
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


 
 
c
o
n
s
t
 
s
n
a
p
s
h
o
t
C
o
u
n
t
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
c
a
m
e
r
a
E
n
a
b
l
e
d
R
e
f
 
=
 
u
s
e
R
e
f
(
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
o
n
T
e
r
m
i
n
a
t
e
R
e
f
 
=
 
u
s
e
R
e
f
(
o
n
T
e
r
m
i
n
a
t
e
)
;


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{
 
o
n
T
e
r
m
i
n
a
t
e
R
e
f
.
c
u
r
r
e
n
t
 
=
 
o
n
T
e
r
m
i
n
a
t
e
;
 
}
)
;




 
 
/
/
 
R
e
a
c
t
i
v
e
 
s
t
a
t
e
 
f
o
r
 
U
I


 
 
c
o
n
s
t
 
[
s
t
a
t
e
,
 
s
e
t
S
t
a
t
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
P
r
o
c
t
o
r
S
t
a
t
e
>
(
{


 
 
 
 
t
a
b
S
w
i
t
c
h
e
s
:
 
0
,


 
 
 
 
f
o
c
u
s
L
o
s
s
e
s
:
 
0
,


 
 
 
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
:
 
0
,


 
 
 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
:
 
0
,


 
 
 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
:
 
0
,


 
 
 
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
:
 
0
,


 
 
 
 
f
a
c
e
V
i
o
l
a
t
i
o
n
s
:
 
[
]
,


 
 
 
 
i
s
F
u
l
l
s
c
r
e
e
n
:
 
f
a
l
s
e
,


 
 
 
 
t
e
r
m
i
n
a
t
e
d
:
 
f
a
l
s
e
,


 
 
 
 
t
e
r
m
i
n
a
t
i
o
n
R
e
a
s
o
n
:
 
n
u
l
l
,


 
 
 
 
s
h
o
w
F
u
l
l
s
c
r
e
e
n
W
a
r
n
i
n
g
:
 
f
a
l
s
e
,


 
 
 
 
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
R
e
m
a
i
n
i
n
g
:
 
0
,


 
 
}
)
;




 
 
/
*
 
-
-
-
-
 
h
e
l
p
e
r
s
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
c
o
n
s
t
 
p
u
s
h
W
a
r
n
i
n
g
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
t
y
p
e
:
 
s
t
r
i
n
g
,
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
w
a
r
n
i
n
g
s
R
e
f
.
c
u
r
r
e
n
t
.
p
u
s
h
(
{
 
t
y
p
e
,
 
m
e
s
s
a
g
e
,
 
t
i
m
e
s
t
a
m
p
:
 
n
e
w
 
D
a
t
e
(
)
.
t
o
I
S
O
S
t
r
i
n
g
(
)
 
}
)
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
s
y
n
c
S
t
a
t
e
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
 
=
>
 
{


 
 
 
 
s
e
t
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{


 
 
 
 
 
 
.
.
.
p
r
e
v
,


 
 
 
 
 
 
t
a
b
S
w
i
t
c
h
e
s
:
 
t
a
b
S
w
i
t
c
h
e
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
 
 
f
o
c
u
s
L
o
s
s
e
s
:
 
f
o
c
u
s
L
o
s
s
e
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
 
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
:
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
:
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
:
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
 
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
:
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
 
 
f
a
c
e
V
i
o
l
a
t
i
o
n
s
:
 
[
.
.
.
f
a
c
e
V
i
o
l
a
t
i
o
n
s
R
e
f
.
c
u
r
r
e
n
t
]
,


 
 
 
 
}
)
)
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
t
e
r
m
i
n
a
t
e
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
r
e
a
s
o
n
:
 
s
t
r
i
n
g
)
 
=
>
 
{


 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
 
=
 
t
r
u
e
;


 
 
 
 
t
e
r
m
i
n
a
t
i
o
n
R
e
a
s
o
n
R
e
f
.
c
u
r
r
e
n
t
 
=
 
r
e
a
s
o
n
;


 
 
 
 
s
e
t
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
t
e
r
m
i
n
a
t
e
d
:
 
t
r
u
e
,
 
t
e
r
m
i
n
a
t
i
o
n
R
e
a
s
o
n
:
 
r
e
a
s
o
n
 
}
)
)
;


 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
T
e
s
t
 
a
u
t
o
-
s
u
b
m
i
t
t
e
d
 
d
u
e
 
t
o
 
v
i
o
l
a
t
i
o
n
s
.
"
,
 
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
 
5
0
0
0
 
}
)
;


 
 
 
 
o
n
T
e
r
m
i
n
a
t
e
R
e
f
.
c
u
r
r
e
n
t
(
r
e
a
s
o
n
)
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(
t
a
b
S
w
i
t
c
h
e
s
R
e
f
.
c
u
r
r
e
n
t
 
>
=
 
m
a
x
T
a
b
S
w
i
t
c
h
e
s
)
 
{


 
 
 
 
 
 
t
e
r
m
i
n
a
t
e
(
"
t
a
b
_
s
w
i
t
c
h
_
l
i
m
i
t
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
i
f
 
(
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
R
e
f
.
c
u
r
r
e
n
t
 
>
=
 
m
a
x
F
u
l
l
s
c
r
e
e
n
E
x
i
t
s
)
 
{


 
 
 
 
 
 
t
e
r
m
i
n
a
t
e
(
"
f
u
l
l
s
c
r
e
e
n
_
e
x
i
t
_
l
i
m
i
t
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
i
f
 
(
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
>
=
 
m
a
x
D
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
)
 
{


 
 
 
 
 
 
t
e
r
m
i
n
a
t
e
(
"
d
e
v
t
o
o
l
s
_
l
i
m
i
t
"
)
;


 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
}


 
 
 
 
/
/
 
T
o
t
a
l
 
s
c
o
r
e
 
c
h
e
c
k


 
 
 
 
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


 
 
 
 
 
 
t
a
b
S
w
i
t
c
h
e
s
R
e
f
.
c
u
r
r
e
n
t
 
*
 
W
E
I
G
H
T
S
.
t
a
b
S
w
i
t
c
h
 
+


 
 
 
 
 
 
f
o
c
u
s
L
o
s
s
e
s
R
e
f
.
c
u
r
r
e
n
t
 
*
 
W
E
I
G
H
T
S
.
f
o
c
u
s
L
o
s
s
 
+


 
 
 
 
 
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
R
e
f
.
c
u
r
r
e
n
t
 
*
 
W
E
I
G
H
T
S
.
f
u
l
l
s
c
r
e
e
n
E
x
i
t
 
+


 
 
 
 
 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
*
 
W
E
I
G
H
T
S
.
d
e
v
t
o
o
l
s
 
+


 
 
 
 
 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
*
 
W
E
I
G
H
T
S
.
c
o
p
y
P
a
s
t
e
 
+


 
 
 
 
 
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
*
 
W
E
I
G
H
T
S
.
r
i
g
h
t
C
l
i
c
k
 
+


 
 
 
 
 
 
f
a
c
e
V
i
o
l
a
t
i
o
n
s
R
e
f
.
c
u
r
r
e
n
t
.
l
e
n
g
t
h
 
*
 
W
E
I
G
H
T
S
.
f
a
c
e
V
i
o
l
a
t
i
o
n
;


 
 
 
 
i
f
 
(
t
o
t
a
l
 
>
=
 
M
A
X
_
T
O
T
A
L
_
S
C
O
R
E
)
 
{


 
 
 
 
 
 
t
e
r
m
i
n
a
t
e
(
"
t
o
t
a
l
_
v
i
o
l
a
t
i
o
n
s
_
l
i
m
i
t
"
)
;


 
 
 
 
}


 
 
}
,
 
[
m
a
x
T
a
b
S
w
i
t
c
h
e
s
,
 
m
a
x
F
u
l
l
s
c
r
e
e
n
E
x
i
t
s
,
 
m
a
x
D
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
,
 
t
e
r
m
i
n
a
t
e
]
)
;




 
 
/
*
 
-
-
-
-
 
F
u
l
l
s
c
r
e
e
n
 
g
r
a
c
e
 
p
e
r
i
o
d
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
c
o
n
s
t
 
s
t
a
r
t
G
r
a
c
e
P
e
r
i
o
d
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
l
e
t
 
r
e
m
a
i
n
i
n
g
 
=
 
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
S
e
c
s
;


 
 
 
 
s
e
t
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
s
h
o
w
F
u
l
l
s
c
r
e
e
n
W
a
r
n
i
n
g
:
 
t
r
u
e
,
 
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
R
e
m
a
i
n
i
n
g
:
 
r
e
m
a
i
n
i
n
g
 
}
)
)
;




 
 
 
 
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
s
e
t
I
n
t
e
r
v
a
l
(
(
)
 
=
>
 
{


 
 
 
 
 
 
r
e
m
a
i
n
i
n
g
 
-
=
 
1
;


 
 
 
 
 
 
i
f
 
(
r
e
m
a
i
n
i
n
g
 
<
=
 
0
)
 
{


 
 
 
 
 
 
 
 
i
f
 
(
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
 
 
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
u
l
l
;


 
 
 
 
 
 
 
 
s
e
t
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
s
h
o
w
F
u
l
l
s
c
r
e
e
n
W
a
r
n
i
n
g
:
 
f
a
l
s
e
,
 
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
R
e
m
a
i
n
i
n
g
:
 
0
 
}
)
)
;


 
 
 
 
 
 
 
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
f
u
l
l
s
c
r
e
e
n
_
t
i
m
e
o
u
t
"
,
 
"
F
u
l
l
s
c
r
e
e
n
 
g
r
a
c
e
 
p
e
r
i
o
d
 
e
x
p
i
r
e
d
"
)
;


 
 
 
 
 
 
 
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
(
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
s
e
t
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
R
e
m
a
i
n
i
n
g
:
 
r
e
m
a
i
n
i
n
g
 
}
)
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,
 
1
0
0
0
)
;


 
 
}
,
 
[
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
S
e
c
s
,
 
s
y
n
c
S
t
a
t
e
,
 
p
u
s
h
W
a
r
n
i
n
g
,
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
]
)
;




 
 
c
o
n
s
t
 
c
l
e
a
r
G
r
a
c
e
P
e
r
i
o
d
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
 
=
 
n
u
l
l
;


 
 
 
 
}


 
 
 
 
s
e
t
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
s
h
o
w
F
u
l
l
s
c
r
e
e
n
W
a
r
n
i
n
g
:
 
f
a
l
s
e
,
 
f
u
l
l
s
c
r
e
e
n
G
r
a
c
e
R
e
m
a
i
n
i
n
g
:
 
0
 
}
)
)
;


 
 
}
,
 
[
]
)
;




 
 
/
*
 
-
-
-
-
 
E
v
e
n
t
 
l
i
s
t
e
n
e
r
s
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
!
e
n
a
b
l
e
d
)
 
r
e
t
u
r
n
;




 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
K
e
y
D
o
w
n
 
=
 
(
e
:
 
K
e
y
b
o
a
r
d
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;




 
 
 
 
 
 
/
/
 
B
l
o
c
k
 
F
1
2


 
 
 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
F
1
2
"
)
 
{


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
d
e
v
t
o
o
l
s
"
,
 
"
F
1
2
 
b
l
o
c
k
e
d
"
)
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
D
e
v
T
o
o
l
s
 
a
r
e
 
d
i
s
a
b
l
e
d
 
d
u
r
i
n
g
 
t
h
e
 
t
e
s
t
!
"
,
 
{
 
i
d
:
 
"
d
e
v
t
o
o
l
s
"
,
 
d
u
r
a
t
i
o
n
:
 
2
0
0
0
 
}
)
;


 
 
 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
 
 
 
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
B
l
o
c
k
 
C
t
r
l
+
S
h
i
f
t
+
I
/
J
/
C
/
S
 
(
d
e
v
t
o
o
l
s
 
&
 
s
c
r
e
e
n
s
h
o
t
s
)


 
 
 
 
 
 
i
f
 
(
e
.
c
t
r
l
K
e
y
 
&
&
 
e
.
s
h
i
f
t
K
e
y
 
&
&
 
[
"
I
"
,
 
"
J
"
,
 
"
C
"
,
 
"
S
"
]
.
i
n
c
l
u
d
e
s
(
e
.
k
e
y
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
)
)
 
{


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
d
e
v
t
o
o
l
s
"
,
 
`
C
t
r
l
+
S
h
i
f
t
+
$
{
e
.
k
e
y
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
 
b
l
o
c
k
e
d
`
)
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
D
e
v
T
o
o
l
s
 
a
r
e
 
d
i
s
a
b
l
e
d
 
d
u
r
i
n
g
 
t
h
e
 
t
e
s
t
!
"
,
 
{
 
i
d
:
 
"
d
e
v
t
o
o
l
s
"
,
 
d
u
r
a
t
i
o
n
:
 
2
0
0
0
 
}
)
;


 
 
 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
 
 
 
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
B
l
o
c
k
 
C
t
r
l
+
U
 
(
v
i
e
w
 
s
o
u
r
c
e
)


 
 
 
 
 
 
i
f
 
(
e
.
c
t
r
l
K
e
y
 
&
&
 
!
e
.
s
h
i
f
t
K
e
y
 
&
&
 
e
.
k
e
y
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
 
=
=
=
 
"
U
"
)
 
{


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
d
e
v
t
o
o
l
s
"
,
 
"
C
t
r
l
+
U
 
b
l
o
c
k
e
d
"
)
;


 
 
 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
 
 
 
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
B
l
o
c
k
 
C
t
r
l
+
S
 
(
s
a
v
e
)
,
 
C
t
r
l
+
A
 
(
s
e
l
e
c
t
 
a
l
l
)
,
 
C
t
r
l
+
P
 
(
p
r
i
n
t
)


 
 
 
 
 
 
/
/
 
C
t
r
l
+
H
 
(
h
i
s
t
o
r
y
)
,
 
C
t
r
l
+
J
 
(
d
o
w
n
l
o
a
d
s
)
,
 
C
t
r
l
+
L
 
(
a
d
d
r
e
s
s
 
b
a
r
)
,


 
 
 
 
 
 
/
/
 
C
t
r
l
+
D
 
(
b
o
o
k
m
a
r
k
)
,
 
C
t
r
l
+
G
 
(
f
i
n
d
 
n
e
x
t
)


 
 
 
 
 
 
i
f
 
(
e
.
c
t
r
l
K
e
y
 
&
&
 
!
e
.
s
h
i
f
t
K
e
y
 
&
&
 
[
"
S
"
,
 
"
A
"
,
 
"
P
"
,
 
"
H
"
,
 
"
J
"
,
 
"
L
"
,
 
"
D
"
,
 
"
G
"
]
.
i
n
c
l
u
d
e
s
(
e
.
k
e
y
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
)
)
 
{


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
B
l
o
c
k
 
P
r
i
n
t
S
c
r
e
e
n


 
 
 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
P
r
i
n
t
S
c
r
e
e
n
"
)
 
{


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
s
c
r
e
e
n
s
h
o
t
"
,
 
"
P
r
i
n
t
S
c
r
e
e
n
 
b
l
o
c
k
e
d
"
)
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
S
c
r
e
e
n
s
h
o
t
s
 
a
r
e
 
d
i
s
a
b
l
e
d
 
d
u
r
i
n
g
 
t
h
e
 
t
e
s
t
!
"
,
 
{
 
i
d
:
 
"
s
c
r
e
e
n
s
h
o
t
"
,
 
d
u
r
a
t
i
o
n
:
 
2
0
0
0
 
}
)
;


 
 
 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
B
l
o
c
k
 
A
l
t
+
T
a
b
 
a
w
a
r
e
n
e
s
s
 
(
c
a
n
'
t
 
p
r
e
v
e
n
t
 
O
S
-
l
e
v
e
l
 
b
u
t
 
l
o
g
 
i
t
)


 
 
 
 
 
 
i
f
 
(
e
.
a
l
t
K
e
y
 
&
&
 
e
.
k
e
y
 
=
=
=
 
"
T
a
b
"
)
 
{


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
B
l
o
c
k
 
E
s
c
a
p
e
 
k
e
y
 
(
p
r
e
v
e
n
t
 
e
x
i
t
i
n
g
 
f
u
l
l
s
c
r
e
e
n
 
v
i
a
 
E
s
c
a
p
e
)


 
 
 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
E
s
c
a
p
e
"
)
 
{


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
B
l
o
c
k
 
F
1
-
F
1
1
 
f
u
n
c
t
i
o
n
 
k
e
y
s


 
 
 
 
 
 
i
f
 
(
/
^
F
(
[
1
-
9
]
|
1
[
0
1
]
)
$
/
.
t
e
s
t
(
e
.
k
e
y
)
)
 
{


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
B
l
o
c
k
 
C
t
r
l
+
W
 
/
 
C
t
r
l
+
N
 
/
 
C
t
r
l
+
T
 
(
c
l
o
s
e
/
n
e
w
 
t
a
b
/
w
i
n
d
o
w
)


 
 
 
 
 
 
i
f
 
(
e
.
c
t
r
l
K
e
y
 
&
&
 
[
"
W
"
,
 
"
N
"
,
 
"
T
"
]
.
i
n
c
l
u
d
e
s
(
e
.
k
e
y
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
)
)
 
{


 
 
 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
 
 
e
.
s
t
o
p
P
r
o
p
a
g
a
t
i
o
n
(
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
}
;




 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
C
o
n
t
e
x
t
M
e
n
u
 
=
 
(
e
:
 
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
r
i
g
h
t
_
c
l
i
c
k
"
,
 
"
R
i
g
h
t
-
c
l
i
c
k
 
b
l
o
c
k
e
d
"
)
;


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
R
i
g
h
t
-
c
l
i
c
k
 
i
s
 
d
i
s
a
b
l
e
d
!
"
,
 
{
 
i
d
:
 
"
r
i
g
h
t
c
l
i
c
k
"
,
 
d
u
r
a
t
i
o
n
:
 
1
5
0
0
 
}
)
;


 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
}
;




 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
C
o
p
y
P
a
s
t
e
 
=
 
(
e
:
 
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
c
o
p
y
_
p
a
s
t
e
"
,
 
`
$
{
e
.
t
y
p
e
}
 
b
l
o
c
k
e
d
`
)
;


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
C
o
p
y
/
p
a
s
t
e
 
i
s
 
d
i
s
a
b
l
e
d
 
d
u
r
i
n
g
 
t
h
e
 
t
e
s
t
!
"
,
 
{
 
i
d
:
 
"
c
o
p
y
p
a
s
t
e
"
,
 
d
u
r
a
t
i
o
n
:
 
1
5
0
0
 
}
)
;


 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
}
;




 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
V
i
s
i
b
i
l
i
t
y
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
 
|
|
 
!
d
o
c
u
m
e
n
t
.
h
i
d
d
e
n
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
l
a
s
t
V
i
s
i
b
i
l
i
t
y
T
s
.
c
u
r
r
e
n
t
 
=
 
D
a
t
e
.
n
o
w
(
)
;


 
 
 
 
 
 
t
a
b
S
w
i
t
c
h
e
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
t
a
b
_
s
w
i
t
c
h
"
,
 
"
T
a
b
 
s
w
i
t
c
h
 
d
e
t
e
c
t
e
d
"
)
;


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
`
W
a
r
n
i
n
g
:
 
T
a
b
 
s
w
i
t
c
h
 
d
e
t
e
c
t
e
d
!
 
(
$
{
t
a
b
S
w
i
t
c
h
e
s
R
e
f
.
c
u
r
r
e
n
t
}
/
$
{
m
a
x
T
a
b
S
w
i
t
c
h
e
s
}
)
`
,
 
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
 
3
0
0
0
 
}
)
;


 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
 
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
(
)
;


 
 
 
 
}
;




 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
B
l
u
r
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
/
/
 
D
e
d
u
p
l
i
c
a
t
e
:
 
s
k
i
p
 
i
f
 
v
i
s
i
b
i
l
i
t
y
 
c
h
a
n
g
e
 
f
i
r
e
d
 
w
i
t
h
i
n
 
5
0
0
m
s


 
 
 
 
 
 
i
f
 
(
D
a
t
e
.
n
o
w
(
)
 
-
 
l
a
s
t
V
i
s
i
b
i
l
i
t
y
T
s
.
c
u
r
r
e
n
t
 
<
 
5
0
0
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
f
o
c
u
s
L
o
s
s
e
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
f
o
c
u
s
_
l
o
s
s
"
,
 
"
W
i
n
d
o
w
 
f
o
c
u
s
 
l
o
s
t
"
)
;


 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
}
;




 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
F
u
l
l
s
c
r
e
e
n
C
h
a
n
g
e
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
i
n
F
S
 
=
 
!
!
d
o
c
u
m
e
n
t
.
f
u
l
l
s
c
r
e
e
n
E
l
e
m
e
n
t
;


 
 
 
 
 
 
s
e
t
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
i
s
F
u
l
l
s
c
r
e
e
n
:
 
i
n
F
S
 
}
)
)
;


 
 
 
 
 
 
i
f
 
(
!
i
n
F
S
 
&
&
 
!
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
{


 
 
 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
f
u
l
l
s
c
r
e
e
n
_
e
x
i
t
"
,
 
"
F
u
l
l
s
c
r
e
e
n
 
e
x
i
t
e
d
"
)
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
Y
o
u
 
e
x
i
t
e
d
 
f
u
l
l
s
c
r
e
e
n
!
 
R
e
t
u
r
n
 
w
i
t
h
i
n
 
1
0
 
s
e
c
o
n
d
s
.
"
,
 
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
 
4
0
0
0
 
}
)
;


 
 
 
 
 
 
 
 
s
t
a
r
t
G
r
a
c
e
P
e
r
i
o
d
(
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
i
f
 
(
i
n
F
S
)
 
{


 
 
 
 
 
 
 
 
c
l
e
a
r
G
r
a
c
e
P
e
r
i
o
d
(
)
;


 
 
 
 
 
 
}


 
 
 
 
}
;




 
 
 
 
/
/
 
B
l
o
c
k
 
d
r
a
g
 
e
v
e
n
t
s
 
(
p
r
e
v
e
n
t
 
d
r
a
g
g
i
n
g
 
t
e
x
t
/
i
m
a
g
e
s
 
o
u
t
)


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
D
r
a
g
S
t
a
r
t
 
=
 
(
e
:
 
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
}
;




 
 
 
 
/
/
 
B
l
o
c
k
 
p
r
i
n
t


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
B
e
f
o
r
e
P
r
i
n
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
p
r
i
n
t
"
,
 
"
P
r
i
n
t
 
a
t
t
e
m
p
t
 
b
l
o
c
k
e
d
"
)
;


 
 
 
 
 
 
t
o
a
s
t
.
e
r
r
o
r
(
"
P
r
i
n
t
i
n
g
 
i
s
 
d
i
s
a
b
l
e
d
 
d
u
r
i
n
g
 
t
h
e
 
t
e
s
t
!
"
,
 
{
 
i
d
:
 
"
p
r
i
n
t
"
,
 
d
u
r
a
t
i
o
n
:
 
2
0
0
0
 
}
)
;


 
 
 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
}
;




 
 
 
 
/
/
 
D
e
t
e
c
t
 
w
i
n
d
o
w
 
r
e
s
i
z
e
 
(
p
o
t
e
n
t
i
a
l
 
s
c
r
e
e
n
-
s
h
a
r
e
 
/
 
s
p
l
i
t
-
s
c
r
e
e
n
)


 
 
 
 
l
e
t
 
l
a
s
t
W
i
d
t
h
 
=
 
w
i
n
d
o
w
.
i
n
n
e
r
W
i
d
t
h
;


 
 
 
 
l
e
t
 
l
a
s
t
H
e
i
g
h
t
 
=
 
w
i
n
d
o
w
.
i
n
n
e
r
H
e
i
g
h
t
;


 
 
 
 
c
o
n
s
t
 
h
a
n
d
l
e
R
e
s
i
z
e
 
=
 
(
)
 
=
>
 
{


 
 
 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
 
 
c
o
n
s
t
 
w
i
d
t
h
D
e
l
t
a
 
=
 
M
a
t
h
.
a
b
s
(
w
i
n
d
o
w
.
i
n
n
e
r
W
i
d
t
h
 
-
 
l
a
s
t
W
i
d
t
h
)
;


 
 
 
 
 
 
c
o
n
s
t
 
h
e
i
g
h
t
D
e
l
t
a
 
=
 
M
a
t
h
.
a
b
s
(
w
i
n
d
o
w
.
i
n
n
e
r
H
e
i
g
h
t
 
-
 
l
a
s
t
H
e
i
g
h
t
)
;


 
 
 
 
 
 
/
/
 
O
n
l
y
 
f
l
a
g
 
s
i
g
n
i
f
i
c
a
n
t
 
r
e
s
i
z
e
s
 
(
>
 
1
0
0
p
x
)
,
 
n
o
t
 
m
i
n
o
r
 
a
d
j
u
s
t
m
e
n
t
s


 
 
 
 
 
 
i
f
 
(
w
i
d
t
h
D
e
l
t
a
 
>
 
1
0
0
 
|
|
 
h
e
i
g
h
t
D
e
l
t
a
 
>
 
1
0
0
)
 
{


 
 
 
 
 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
w
i
n
d
o
w
_
r
e
s
i
z
e
"
,
 
`
W
i
n
d
o
w
 
r
e
s
i
z
e
d
:
 
$
{
w
i
d
t
h
D
e
l
t
a
}
x
$
{
h
e
i
g
h
t
D
e
l
t
a
}
`
)
;


 
 
 
 
 
 
}


 
 
 
 
 
 
l
a
s
t
W
i
d
t
h
 
=
 
w
i
n
d
o
w
.
i
n
n
e
r
W
i
d
t
h
;


 
 
 
 
 
 
l
a
s
t
H
e
i
g
h
t
 
=
 
w
i
n
d
o
w
.
i
n
n
e
r
H
e
i
g
h
t
;


 
 
 
 
}
;




 
 
 
 
/
/
 
A
t
t
a
c
h


 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
k
e
y
d
o
w
n
"
,
 
h
a
n
d
l
e
K
e
y
D
o
w
n
,
 
t
r
u
e
)
;


 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
c
o
n
t
e
x
t
m
e
n
u
"
,
 
h
a
n
d
l
e
C
o
n
t
e
x
t
M
e
n
u
,
 
t
r
u
e
)
;


 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
c
o
p
y
"
,
 
h
a
n
d
l
e
C
o
p
y
P
a
s
t
e
,
 
t
r
u
e
)
;


 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
c
u
t
"
,
 
h
a
n
d
l
e
C
o
p
y
P
a
s
t
e
,
 
t
r
u
e
)
;


 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
p
a
s
t
e
"
,
 
h
a
n
d
l
e
C
o
p
y
P
a
s
t
e
,
 
t
r
u
e
)
;


 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
v
i
s
i
b
i
l
i
t
y
c
h
a
n
g
e
"
,
 
h
a
n
d
l
e
V
i
s
i
b
i
l
i
t
y
)
;


 
 
 
 
w
i
n
d
o
w
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
b
l
u
r
"
,
 
h
a
n
d
l
e
B
l
u
r
)
;


 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
f
u
l
l
s
c
r
e
e
n
c
h
a
n
g
e
"
,
 
h
a
n
d
l
e
F
u
l
l
s
c
r
e
e
n
C
h
a
n
g
e
)
;


 
 
 
 
d
o
c
u
m
e
n
t
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
d
r
a
g
s
t
a
r
t
"
,
 
h
a
n
d
l
e
D
r
a
g
S
t
a
r
t
,
 
t
r
u
e
)
;


 
 
 
 
w
i
n
d
o
w
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
b
e
f
o
r
e
p
r
i
n
t
"
,
 
h
a
n
d
l
e
B
e
f
o
r
e
P
r
i
n
t
)
;


 
 
 
 
w
i
n
d
o
w
.
a
d
d
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
r
e
s
i
z
e
"
,
 
h
a
n
d
l
e
R
e
s
i
z
e
)
;




 
 
 
 
/
/
 
C
S
S
:
 
d
i
s
a
b
l
e
 
t
e
x
t
 
s
e
l
e
c
t
i
o
n
,
 
p
o
i
n
t
e
r
 
e
v
e
n
t
s
 
o
n
 
n
o
n
-
t
e
s
t
 
e
l
e
m
e
n
t
s


 
 
 
 
d
o
c
u
m
e
n
t
.
b
o
d
y
.
c
l
a
s
s
L
i
s
t
.
a
d
d
(
"
p
r
o
c
t
o
r
e
d
-
t
e
s
t
"
)
;




 
 
 
 
/
/
 
O
v
e
r
r
i
d
e
 
c
l
i
p
b
o
a
r
d
 
A
P
I


 
 
 
 
c
o
n
s
t
 
o
r
i
g
W
r
i
t
e
 
=
 
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
?
.
w
r
i
t
e
T
e
x
t
?
.
b
i
n
d
(
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
)
;


 
 
 
 
i
f
 
(
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
)
 
{


 
 
 
 
 
 
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
.
w
r
i
t
e
T
e
x
t
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{
}
;


 
 
 
 
 
 
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
.
w
r
i
t
e
 
=
 
a
s
y
n
c
 
(
)
 
=
>
 
{
}
;


 
 
 
 
}




 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
{


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
k
e
y
d
o
w
n
"
,
 
h
a
n
d
l
e
K
e
y
D
o
w
n
,
 
t
r
u
e
)
;


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
c
o
n
t
e
x
t
m
e
n
u
"
,
 
h
a
n
d
l
e
C
o
n
t
e
x
t
M
e
n
u
,
 
t
r
u
e
)
;


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
c
o
p
y
"
,
 
h
a
n
d
l
e
C
o
p
y
P
a
s
t
e
,
 
t
r
u
e
)
;


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
c
u
t
"
,
 
h
a
n
d
l
e
C
o
p
y
P
a
s
t
e
,
 
t
r
u
e
)
;


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
p
a
s
t
e
"
,
 
h
a
n
d
l
e
C
o
p
y
P
a
s
t
e
,
 
t
r
u
e
)
;


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
v
i
s
i
b
i
l
i
t
y
c
h
a
n
g
e
"
,
 
h
a
n
d
l
e
V
i
s
i
b
i
l
i
t
y
)
;


 
 
 
 
 
 
w
i
n
d
o
w
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
b
l
u
r
"
,
 
h
a
n
d
l
e
B
l
u
r
)
;


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
f
u
l
l
s
c
r
e
e
n
c
h
a
n
g
e
"
,
 
h
a
n
d
l
e
F
u
l
l
s
c
r
e
e
n
C
h
a
n
g
e
)
;


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
d
r
a
g
s
t
a
r
t
"
,
 
h
a
n
d
l
e
D
r
a
g
S
t
a
r
t
,
 
t
r
u
e
)
;


 
 
 
 
 
 
w
i
n
d
o
w
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
b
e
f
o
r
e
p
r
i
n
t
"
,
 
h
a
n
d
l
e
B
e
f
o
r
e
P
r
i
n
t
)
;


 
 
 
 
 
 
w
i
n
d
o
w
.
r
e
m
o
v
e
E
v
e
n
t
L
i
s
t
e
n
e
r
(
"
r
e
s
i
z
e
"
,
 
h
a
n
d
l
e
R
e
s
i
z
e
)
;


 
 
 
 
 
 
d
o
c
u
m
e
n
t
.
b
o
d
y
.
c
l
a
s
s
L
i
s
t
.
r
e
m
o
v
e
(
"
p
r
o
c
t
o
r
e
d
-
t
e
s
t
"
)
;


 
 
 
 
 
 
i
f
 
(
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
g
r
a
c
e
T
i
m
e
r
R
e
f
.
c
u
r
r
e
n
t
)
;


 
 
 
 
 
 
/
/
 
R
e
s
t
o
r
e
 
c
l
i
p
b
o
a
r
d
 
A
P
I


 
 
 
 
 
 
i
f
 
(
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
 
&
&
 
o
r
i
g
W
r
i
t
e
)
 
{


 
 
 
 
 
 
 
 
n
a
v
i
g
a
t
o
r
.
c
l
i
p
b
o
a
r
d
.
w
r
i
t
e
T
e
x
t
 
=
 
o
r
i
g
W
r
i
t
e
;


 
 
 
 
 
 
}


 
 
 
 
}
;


 
 
}
,
 
[
e
n
a
b
l
e
d
,
 
m
a
x
T
a
b
S
w
i
t
c
h
e
s
,
 
s
y
n
c
S
t
a
t
e
,
 
p
u
s
h
W
a
r
n
i
n
g
,
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
,
 
s
t
a
r
t
G
r
a
c
e
P
e
r
i
o
d
,
 
c
l
e
a
r
G
r
a
c
e
P
e
r
i
o
d
]
)
;




 
 
/
*
 
-
-
-
-
 
P
u
b
l
i
c
 
A
P
I
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


 
 
c
o
n
s
t
 
r
e
g
i
s
t
e
r
F
a
c
e
V
i
o
l
a
t
i
o
n
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
v
:
 
F
a
c
e
V
i
o
l
a
t
i
o
n
)
 
=
>
 
{


 
 
 
 
i
f
 
(
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
)
 
r
e
t
u
r
n
;


 
 
 
 
f
a
c
e
V
i
o
l
a
t
i
o
n
s
R
e
f
.
c
u
r
r
e
n
t
.
p
u
s
h
(
v
)
;


 
 
 
 
p
u
s
h
W
a
r
n
i
n
g
(
"
f
a
c
e
_
v
i
o
l
a
t
i
o
n
"
,
 
`
$
{
v
.
t
y
p
e
}
 
d
e
t
e
c
t
e
d
`
)
;


 
 
 
 
s
y
n
c
S
t
a
t
e
(
)
;


 
 
 
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
(
)
;


 
 
}
,
 
[
s
y
n
c
S
t
a
t
e
,
 
p
u
s
h
W
a
r
n
i
n
g
,
 
c
h
e
c
k
T
h
r
e
s
h
o
l
d
s
]
)
;




 
 
c
o
n
s
t
 
s
e
t
C
a
m
e
r
a
E
n
a
b
l
e
d
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
v
a
l
:
 
b
o
o
l
e
a
n
)
 
=
>
 
{


 
 
 
 
c
a
m
e
r
a
E
n
a
b
l
e
d
R
e
f
.
c
u
r
r
e
n
t
 
=
 
v
a
l
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
a
d
d
S
n
a
p
s
h
o
t
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
 
=
>
 
{


 
 
 
 
s
n
a
p
s
h
o
t
C
o
u
n
t
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
r
e
q
u
e
s
t
F
u
l
l
s
c
r
e
e
n
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
a
w
a
i
t
 
d
o
c
u
m
e
n
t
.
d
o
c
u
m
e
n
t
E
l
e
m
e
n
t
.
r
e
q
u
e
s
t
F
u
l
l
s
c
r
e
e
n
(
)
;


 
 
 
 
 
 
s
e
t
S
t
a
t
e
(
(
p
r
e
v
)
 
=
>
 
(
{
 
.
.
.
p
r
e
v
,
 
i
s
F
u
l
l
s
c
r
e
e
n
:
 
t
r
u
e
 
}
)
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
/
/
 
N
o
t
 
s
u
p
p
o
r
t
e
d
 
o
r
 
r
e
j
e
c
t
e
d


 
 
 
 
}


 
 
}
,
 
[
]
)
;




 
 
c
o
n
s
t
 
g
e
t
P
r
o
c
t
o
r
L
o
g
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(
(
)
:
 
P
r
o
c
t
o
r
L
o
g
 
=
>
 
(
{


 
 
 
 
t
a
b
S
w
i
t
c
h
e
s
:
 
t
a
b
S
w
i
t
c
h
e
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
f
o
c
u
s
L
o
s
s
e
s
:
 
f
o
c
u
s
L
o
s
s
e
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
:
 
f
u
l
l
s
c
r
e
e
n
E
x
i
t
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
:
 
d
e
v
t
o
o
l
s
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
:
 
c
o
p
y
P
a
s
t
e
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
:
 
r
i
g
h
t
C
l
i
c
k
A
t
t
e
m
p
t
s
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
f
a
c
e
V
i
o
l
a
t
i
o
n
s
:
 
[
.
.
.
f
a
c
e
V
i
o
l
a
t
i
o
n
s
R
e
f
.
c
u
r
r
e
n
t
]
,


 
 
 
 
w
a
r
n
i
n
g
s
:
 
[
.
.
.
w
a
r
n
i
n
g
s
R
e
f
.
c
u
r
r
e
n
t
]
,


 
 
 
 
t
e
r
m
i
n
a
t
e
d
:
 
t
e
r
m
i
n
a
t
e
d
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
t
e
r
m
i
n
a
t
i
o
n
R
e
a
s
o
n
:
 
t
e
r
m
i
n
a
t
i
o
n
R
e
a
s
o
n
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
c
a
m
e
r
a
E
n
a
b
l
e
d
:
 
c
a
m
e
r
a
E
n
a
b
l
e
d
R
e
f
.
c
u
r
r
e
n
t
,


 
 
 
 
s
n
a
p
s
h
o
t
C
o
u
n
t
:
 
s
n
a
p
s
h
o
t
C
o
u
n
t
R
e
f
.
c
u
r
r
e
n
t
,


 
 
}
)
,
 
[
]
)
;




 
 
r
e
t
u
r
n
 
{


 
 
 
 
s
t
a
t
e
,


 
 
 
 
r
e
g
i
s
t
e
r
F
a
c
e
V
i
o
l
a
t
i
o
n
,


 
 
 
 
s
e
t
C
a
m
e
r
a
E
n
a
b
l
e
d
,


 
 
 
 
a
d
d
S
n
a
p
s
h
o
t
,


 
 
 
 
r
e
q
u
e
s
t
F
u
l
l
s
c
r
e
e
n
,


 
 
 
 
g
e
t
P
r
o
c
t
o
r
L
o
g
,


 
 
}
;


}


