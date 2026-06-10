
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
M
e
m
o
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
 
{
 
L
i
n
k
 
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
-
r
o
u
t
e
r
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
 
C
h
e
c
k
C
i
r
c
l
e
2
,
 
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
 
L
o
c
k
 
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
 
s
e
c
t
i
o
n
s
,
 
q
u
e
s
t
i
o
n
s
 
}
 
f
r
o
m
 
"
.
/
d
a
t
a
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
 
I
n
t
e
r
v
i
e
w
P
r
o
g
r
e
s
s
 
}
 
f
r
o
m
 
"
.
/
d
a
t
a
/
t
y
p
e
s
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
,
 
S
I
T
E
_
U
R
L
 
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
m
p
o
r
t
 
{
 
c
o
u
r
s
e
S
c
h
e
m
a
,
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
 
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
l
i
b
/
s
t
r
u
c
t
u
r
e
d
-
d
a
t
a
"
;


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
A
u
t
h
S
t
o
r
e
 
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
l
i
b
/
a
u
t
h
.
s
t
o
r
e
"
;


i
m
p
o
r
t
 
{
 
L
o
g
i
n
G
a
t
e
 
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
L
o
g
i
n
G
a
t
e
"
;


i
m
p
o
r
t
 
{
 
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
 
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
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s
"
;


i
m
p
o
r
t
 
a
p
i
 
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
l
i
b
/
a
x
i
o
s
"


i
m
p
o
r
t
 
{
 
K
i
c
k
e
r
 
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
u
i
/
K
i
c
k
e
r
"
;




c
o
n
s
t
 
S
T
O
R
A
G
E
_
K
E
Y
 
=
 
"
i
n
t
e
r
v
i
e
w
-
p
r
o
g
r
e
s
s
"
;




f
u
n
c
t
i
o
n
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
:
 
I
n
t
e
r
v
i
e
w
P
r
o
g
r
e
s
s
 
{


 
 
t
r
y
 
{


 
 
 
 
c
o
n
s
t
 
r
a
w
 
=
 
J
S
O
N
.
p
a
r
s
e
(
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
.
g
e
t
I
t
e
m
(
S
T
O
R
A
G
E
_
K
E
Y
)
 
|
|
 
"
{
}
"
)
;




 
 
 
 
i
f
 
(
!
r
a
w
 
|
|
 
t
y
p
e
o
f
 
r
a
w
 
!
=
=
 
"
o
b
j
e
c
t
"
 
|
|
 
A
r
r
a
y
.
i
s
A
r
r
a
y
(
r
a
w
)
)
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
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
 
r
a
w
 
a
s
 
I
n
t
e
r
v
i
e
w
P
r
o
g
r
e
s
s
;


 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
r
e
t
u
r
n
 
{
}
;


 
 
}


}




f
u
n
c
t
i
o
n
 
s
a
v
e
L
o
c
a
l
P
r
o
g
r
e
s
s
(
p
r
o
g
r
e
s
s
:
 
I
n
t
e
r
v
i
e
w
P
r
o
g
r
e
s
s
)
 
{


 
 
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
.
s
e
t
I
t
e
m
(
S
T
O
R
A
G
E
_
K
E
Y
,
 
J
S
O
N
.
s
t
r
i
n
g
i
f
y
(
p
r
o
g
r
e
s
s
)
)
;


}




c
o
n
s
t
 
L
E
V
E
L
_
S
T
Y
L
E
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




c
o
n
s
t
 
D
I
F
F
_
S
T
Y
L
E
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
 
b
g
-
g
r
e
e
n
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
2
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
 
b
g
-
a
m
b
e
r
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
2
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
 
b
g
-
r
e
d
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
r
e
d
-
9
0
0
/
2
0
"
,


}
;




f
u
n
c
t
i
o
n
 
M
e
t
a
C
h
i
p
(
{
 
c
h
i
l
d
r
e
n
,
 
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
"
 
}
:
 
{
 
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
;
 
c
l
a
s
s
N
a
m
e
?
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
 
g
a
p
-
1
.
5
 
p
x
-
2
.
5
 
p
y
-
1
 
t
e
x
t
-
[
1
1
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
c
l
a
s
s
N
a
m
e
 
|
|
 
"
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
"
}
`
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
s
p
a
n
>


 
 
)
;


}




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
 
I
n
t
e
r
v
i
e
w
L
e
s
s
o
n
s
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
i
s
A
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
e
d
 
=
 
u
s
e
A
u
t
h
S
t
o
r
e
(
(
s
)
 
=
>
 
s
.
i
s
A
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
e
d
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
G
a
t
e
,
 
s
e
t
S
h
o
w
G
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
 
[
p
r
o
g
r
e
s
s
,
 
s
e
t
P
r
o
g
r
e
s
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
I
n
t
e
r
v
i
e
w
P
r
o
g
r
e
s
s
>
(
{
}
)
;


 
 
c
o
n
s
t
 
[
i
s
L
o
a
d
i
n
g
,
 
s
e
t
I
s
L
o
a
d
i
n
g
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
 
[
d
i
f
f
F
i
l
t
e
r
,
 
s
e
t
D
i
f
f
F
i
l
t
e
r
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
a
l
l
"
 
|
 
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
 
|
 
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
 
|
 
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


 
 
>
(
"
a
l
l
"
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


 
 
i
f
 
(
!
i
s
A
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
e
d
)
 
{


 
 
 
 
/
/
 
e
s
l
i
n
t
-
d
i
s
a
b
l
e
-
n
e
x
t
-
l
i
n
e
 
r
e
a
c
t
-
h
o
o
k
s
/
s
e
t
-
s
t
a
t
e
-
i
n
-
e
f
f
e
c
t


 
 
 
 
s
e
t
P
r
o
g
r
e
s
s
(
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
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




 
 
c
o
n
s
t
 
l
o
a
d
P
r
o
g
r
e
s
s
 
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


 
 
 
 
s
e
t
I
s
L
o
a
d
i
n
g
(
t
r
u
e
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
l
o
c
a
l
P
r
o
g
r
e
s
s
 
=
 
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
;




 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
p
o
n
s
e
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
"
/
i
n
t
e
r
v
i
e
w
-
p
r
o
g
r
e
s
s
"
)
;




 
 
 
 
 
 
c
o
n
s
t
 
s
e
r
v
e
r
D
a
t
a
 
=
 
r
e
s
p
o
n
s
e
.
d
a
t
a
;




 
 
 
 
 
 
c
o
n
s
t
 
m
e
r
g
e
d
:
 
I
n
t
e
r
v
i
e
w
P
r
o
g
r
e
s
s
 
=
 
{


 
 
 
 
 
 
 
 
.
.
.
l
o
c
a
l
P
r
o
g
r
e
s
s
,


 
 
 
 
 
 
}
;




 
 
 
 
 
 
s
e
r
v
e
r
D
a
t
a
.
c
o
m
p
l
e
t
e
d
I
d
s
.
f
o
r
E
a
c
h
(
(
i
d
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


 
 
 
 
 
 
 
 
m
e
r
g
e
d
[
i
d
]
 
=
 
{
 
c
o
m
p
l
e
t
e
d
:
 
t
r
u
e
 
}
;


 
 
 
 
 
 
}
)
;




 
 
 
 
 
 
s
e
t
P
r
o
g
r
e
s
s
(
m
e
r
g
e
d
)
;




 
 
 
 
 
 
s
a
v
e
L
o
c
a
l
P
r
o
g
r
e
s
s
(
m
e
r
g
e
d
)
;




 
 
 
 
 
 
c
o
n
s
t
 
m
i
g
r
a
t
e
d
 
=
 
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
.
g
e
t
I
t
e
m
(
"
i
n
t
e
r
v
i
e
w
-
p
r
o
g
r
e
s
s
-
m
i
g
r
a
t
e
d
"
)
;




 
 
 
 
 
 
i
f
 
(
!
m
i
g
r
a
t
e
d
 
&
&
 
O
b
j
e
c
t
.
k
e
y
s
(
l
o
c
a
l
P
r
o
g
r
e
s
s
)
.
l
e
n
g
t
h
 
>
 
0
)
 
{


 
 
 
 
 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
[
q
u
e
s
t
i
o
n
I
d
,
 
v
a
l
u
e
]
 
o
f
 
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
l
o
c
a
l
P
r
o
g
r
e
s
s
)
)
 
{


 
 
 
 
 
 
 
 
 
 
i
f
 
(
v
a
l
u
e
.
c
o
m
p
l
e
t
e
d
)
 
{


 
 
 
 
 
 
 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
a
t
c
h
(
`
/
i
n
t
e
r
v
i
e
w
-
p
r
o
g
r
e
s
s
`
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
I
d
:
 
q
u
e
s
t
i
o
n
I
d
,
 
a
c
t
i
o
n
:
 
"
c
o
m
p
l
e
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
}




 
 
 
 
 
 
 
 
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
.
s
e
t
I
t
e
m
(
"
i
n
t
e
r
v
i
e
w
-
p
r
o
g
r
e
s
s
-
m
i
g
r
a
t
e
d
"
,
 
"
t
r
u
e
"
)
;


 
 
 
 
 
 
}


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
o
r
)
 
{


 
 
 
 
 
 
c
o
n
s
o
l
e
.
e
r
r
o
r
(
"
F
a
i
l
e
d
 
t
o
 
l
o
a
d
 
i
n
t
e
r
v
i
e
w
 
p
r
o
g
r
e
s
s
"
,
 
e
r
r
o
r
)
;


 
 
 
 
 
 
s
e
t
P
r
o
g
r
e
s
s
(
g
e
t
L
o
c
a
l
P
r
o
g
r
e
s
s
(
)
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
I
s
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
l
o
a
d
P
r
o
g
r
e
s
s
(
)
;


}
,
 
[
i
s
A
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
e
d
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
c
t
i
o
n
S
t
a
t
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
r
e
t
u
r
n
 
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
e
c
t
i
o
n
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
Q
u
e
s
t
i
o
n
s
 
=
 
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
f
i
l
t
e
r
(
(
q
)
 
=
>
 
q
.
s
e
c
t
i
o
n
I
d
 
=
=
=
 
s
e
c
t
i
o
n
.
i
d
)
;


 
 
 
 
 
 
c
o
n
s
t
 
c
o
m
p
l
e
t
e
d
 
=
 
s
e
c
t
i
o
n
Q
u
e
s
t
i
o
n
s
.
f
i
l
t
e
r
(
(
q
)
 
=
>
 
p
r
o
g
r
e
s
s
[
q
.
i
d
]
?
.
c
o
m
p
l
e
t
e
d
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
 
s
e
c
t
i
o
n
Q
u
e
s
t
i
o
n
s
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
 
e
a
s
y
 
=
 
s
e
c
t
i
o
n
Q
u
e
s
t
i
o
n
s
.
f
i
l
t
e
r
(
(
q
)
 
=
>
 
q
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
 
=
=
=
 
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
 
m
e
d
i
u
m
 
=
 
s
e
c
t
i
o
n
Q
u
e
s
t
i
o
n
s
.
f
i
l
t
e
r
(
(
q
)
 
=
>
 
q
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
 
=
=
=
 
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
 
h
a
r
d
 
=
 
s
e
c
t
i
o
n
Q
u
e
s
t
i
o
n
s
.
f
i
l
t
e
r
(
(
q
)
 
=
>
 
q
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
 
=
=
=
 
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
 
{
 
.
.
.
s
e
c
t
i
o
n
,
 
c
o
m
p
l
e
t
e
d
,
 
t
o
t
a
l
,
 
e
a
s
y
,
 
m
e
d
i
u
m
,
 
h
a
r
d
 
}
;


 
 
 
 
}
)
;


 
 
}
,
 
[
p
r
o
g
r
e
s
s
]
)
;




 
 
c
o
n
s
t
 
v
i
s
i
b
l
e
S
e
c
t
i
o
n
s
 
=
 
u
s
e
M
e
m
o
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
d
i
f
f
F
i
l
t
e
r
 
=
=
=
 
"
a
l
l
"
)
 
r
e
t
u
r
n
 
s
e
c
t
i
o
n
S
t
a
t
s
;


 
 
 
 
r
e
t
u
r
n
 
s
e
c
t
i
o
n
S
t
a
t
s
.
f
i
l
t
e
r
(
(
s
)
 
=
>
 
s
.
l
e
v
e
l
 
=
=
=
 
d
i
f
f
F
i
l
t
e
r
)
;


 
 
}
,
 
[
s
e
c
t
i
o
n
S
t
a
t
s
,
 
d
i
f
f
F
i
l
t
e
r
]
)
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
C
o
m
p
l
e
t
e
d
 
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
r
o
g
r
e
s
s
 
a
s
 
I
n
t
e
r
v
i
e
w
P
r
o
g
r
e
s
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
p
)
 
=
>
 
p
.
c
o
m
p
l
e
t
e
d
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
Q
u
e
s
t
i
o
n
s
 
=
 
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
 
o
v
e
r
a
l
l
P
c
t
 
=
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
 
>
 
0
 
?
 
M
a
t
h
.
r
o
u
n
d
(
(
t
o
t
a
l
C
o
m
p
l
e
t
e
d
 
/
 
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
)
 
*
 
1
0
0
)
 
:
 
0
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
r
e
l
a
t
i
v
e
 
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
 
p
b
-
1
2
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
I
n
t
e
r
v
i
e
w
 
P
r
e
p
a
r
a
t
i
o
n
 
-
 
3
0
0
+
 
Q
u
e
s
t
i
o
n
s
 
&
 
A
n
s
w
e
r
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
P
r
e
p
a
r
e
 
f
o
r
 
t
e
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
s
 
w
i
t
h
 
3
0
0
+
 
q
u
e
s
t
i
o
n
s
 
c
o
v
e
r
i
n
g
 
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
,
 
R
e
a
c
t
,
 
N
o
d
e
.
j
s
,
 
P
y
t
h
o
n
,
 
S
Q
L
,
 
S
y
s
t
e
m
 
D
e
s
i
g
n
,
 
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
,
 
a
n
d
 
m
o
r
e
.
"


 
 
 
 
 
 
 
 
k
e
y
w
o
r
d
s
=
"
i
n
t
e
r
v
i
e
w
 
p
r
e
p
a
r
a
t
i
o
n
,
 
t
e
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
 
q
u
e
s
t
i
o
n
s
,
 
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
 
i
n
t
e
r
v
i
e
w
,
 
R
e
a
c
t
 
i
n
t
e
r
v
i
e
w
,
 
s
y
s
t
e
m
 
d
e
s
i
g
n
 
i
n
t
e
r
v
i
e
w
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
i
n
t
e
r
v
i
e
w
"
)
}


 
 
 
 
 
 
 
 
s
t
r
u
c
t
u
r
e
d
D
a
t
a
=
{
[


 
 
 
 
 
 
 
 
 
 
c
o
u
r
s
e
S
c
h
e
m
a
(
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
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
 
P
r
e
p
a
r
a
t
i
o
n
 
-
 
3
0
0
+
 
Q
u
e
s
t
i
o
n
s
 
&
 
A
n
s
w
e
r
s
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
P
r
e
p
a
r
e
 
f
o
r
 
t
e
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
s
 
w
i
t
h
 
3
0
0
+
 
q
u
e
s
t
i
o
n
s
 
c
o
v
e
r
i
n
g
 
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
,
 
R
e
a
c
t
,
 
N
o
d
e
.
j
s
,
 
P
y
t
h
o
n
,
 
S
Q
L
,
 
S
y
s
t
e
m
 
D
e
s
i
g
n
,
 
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
,
 
a
n
d
 
m
o
r
e
.
"
,


 
 
 
 
 
 
 
 
 
 
 
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
l
e
a
r
n
/
i
n
t
e
r
v
i
e
w
`
,


 
 
 
 
 
 
 
 
 
 
}
)
,


 
 
 
 
 
 
 
 
 
 
b
r
e
a
d
c
r
u
m
b
S
c
h
e
m
a
(
[


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
H
o
m
e
"
,
 
u
r
l
:
 
S
I
T
E
_
U
R
L
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
:
 
"
L
e
a
r
n
"
,
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
l
e
a
r
n
`
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
{
 
n
a
m
e
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
 
P
r
e
p
"
,
 
u
r
l
:
 
`
$
{
S
I
T
E
_
U
R
L
}
/
l
e
a
r
n
/
i
n
t
e
r
v
i
e
w
`
 
}
,


 
 
 
 
 
 
 
 
 
 
]
)
,


 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
/
>




 
 
 
 
 
 
<
d
i
v


 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
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
a
b
s
o
l
u
t
e
 
i
n
s
e
t
-
0
 
p
o
i
n
t
e
r
-
e
v
e
n
t
s
-
n
o
n
e
 
o
p
a
c
i
t
y
-
[
0
.
0
4
]
 
d
a
r
k
:
o
p
a
c
i
t
y
-
[
0
.
0
5
]
 
z
-
0
"


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
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
I
m
a
g
e
:
 
"
l
i
n
e
a
r
-
g
r
a
d
i
e
n
t
(
t
o
 
r
i
g
h
t
,
 
r
g
b
a
(
1
2
0
,
1
1
3
,
1
0
8
,
0
.
2
5
)
 
1
p
x
,
 
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
 
1
p
x
)
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
S
i
z
e
:
 
"
1
2
0
p
x
 
1
0
0
%
"
,


 
 
 
 
 
 
 
 
}
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
r
e
l
a
t
i
v
e
 
m
a
x
-
w
-
6
x
l
 
m
x
-
a
u
t
o
"
>


 
 
 
 
 
 
 
 
{
/
*
 
E
d
i
t
o
r
i
a
l
 
h
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
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
6
 
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
t
-
2
 
m
b
-
1
0
 
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
 
i
t
e
m
s
-
e
n
d
 
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
4
 
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
K
i
c
k
e
r
>
l
e
a
r
n
 
/
 
i
n
t
e
r
v
i
e
w
 
p
r
e
p
<
/
K
i
c
k
e
r
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
W
a
l
k
 
i
n
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
r
e
l
a
t
i
v
e
 
i
n
l
i
n
e
-
b
l
o
c
k
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
r
e
l
a
t
i
v
e
 
z
-
1
0
"
>
r
e
a
d
y
.
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
c
a
l
e
X
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
 
s
c
a
l
e
X
:
 
1
 
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
7
,
 
d
e
l
a
y
:
 
0
.
4
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
h
i
d
d
e
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
a
b
s
o
l
u
t
e
 
b
o
t
t
o
m
-
1
 
l
e
f
t
-
0
 
r
i
g
h
t
-
0
 
h
-
3
 
m
d
:
h
-
4
 
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
 
o
r
i
g
i
n
-
l
e
f
t
 
z
-
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
 
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
5
0
0
 
m
a
x
-
w
-
m
d
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
u
r
a
t
e
d
 
f
r
o
m
 
b
a
s
i
c
 
t
o
 
a
d
v
a
n
c
e
d
,
 
c
o
d
i
n
g
,
 
t
h
e
o
r
y
,
 
s
y
s
t
e
m
 
d
e
s
i
g
n
,
 
a
n
d
 
b
e
h
a
v
i
o
r
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
,
 
g
r
a
d
e
d
 
b
y
 
F
A
A
N
G
 
e
n
g
i
n
e
e
r
s
.


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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
 
s
m
:
g
a
p
-
4
 
f
l
e
x
-
w
r
a
p
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
q
u
e
s
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
e
x
t
-
s
m
 
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
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
m
p
l
e
t
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
e
x
t
-
s
m
 
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
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
C
o
m
p
l
e
t
e
d
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
e
x
t
-
s
m
 
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
a
b
u
l
a
r
-
n
u
m
s
 
m
l
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
v
e
r
a
l
l
P
c
t
}
%


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
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
/
*
 
O
v
e
r
a
l
l
 
p
r
o
g
r
e
s
s
 
s
t
r
i
p
 
*
/
}


 
 
 
 
 
 
 
 
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
8
 
p
x
-
5
 
p
y
-
4
 
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
4
 
m
b
-
2
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
a
d
i
n
g
 
?
 
"
s
y
n
c
i
n
g
 
p
r
o
g
r
e
s
s
"
 
:
 
"
o
v
e
r
a
l
l
 
p
r
o
g
r
e
s
s
"
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
x
s
 
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
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
o
t
a
l
C
o
m
p
l
e
t
e
d
}
 
/
 
{
t
o
t
a
l
Q
u
e
s
t
i
o
n
s
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
f
u
l
l
 
h
-
1
 
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
s
t
o
n
e
-
8
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
r
o
u
n
d
e
d
-
s
m
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
 
w
i
d
t
h
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
 
w
i
d
t
h
:
 
`
$
{
o
v
e
r
a
l
l
P
c
t
}
%
`
 
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
7
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
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
h
-
f
u
l
l
 
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




 
 
 
 
 
 
 
 
{
/
*
 
S
e
c
t
i
o
n
 
h
e
a
d
e
r
 
*
/
}


 
 
 
 
 
 
 
 
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
e
n
d
 
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
4
 
m
b
-
6
"
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
 
w
-
1
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
c
k
s
 
/
 
s
e
c
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
2
 
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
2
 
t
e
x
t
-
2
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
Q
u
e
s
t
i
o
n
 
b
a
n
k
s


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
 
h
i
d
d
e
n
 
s
m
:
b
l
o
c
k
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
v
i
s
i
b
l
e
S
e
c
t
i
o
n
s
.
l
e
n
g
t
h
}
 
s
e
c
t
i
o
n
s


 
 
 
 
 
 
 
 
 
 
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
2
 
m
b
-
6
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
{
(
[
"
a
l
l
"
,
 
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
]
 
a
s
 
c
o
n
s
t
)
.
m
a
p
(
(
d
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
e
t
D
i
f
f
F
i
l
t
e
r
(
d
)
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
{
`
p
x
-
3
 
p
y
-
1
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
s
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
d
u
r
a
t
i
o
n
-
2
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
$
{
d
i
f
f
F
i
l
t
e
r
 
=
=
=
 
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
d
 
=
=
=
 
"
a
l
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
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
9
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
s
t
o
n
e
-
5
0
 
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
9
0
0
 
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
9
0
0
 
s
h
a
d
o
w
-
m
d
 
s
c
a
l
e
-
1
0
5
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
`
$
{
D
I
F
F
_
S
T
Y
L
E
[
d
]
}
 
s
h
a
d
o
w
-
m
d
 
s
c
a
l
e
-
1
0
5
`


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
s
t
o
n
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
s
t
o
n
e
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
 
=
=
=
 
"
a
l
l
"
 
?
 
"
a
l
l
 
l
e
v
e
l
s
"
 
:
 
d
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
)
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
{
/
*
 
S
e
c
t
i
o
n
 
g
r
i
d
 
*
/
}


 
 
 
 
 
 
 
 
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
 
l
g
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
3
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
v
i
s
i
b
l
e
S
e
c
t
i
o
n
s
.
l
e
n
g
t
h
 
=
=
=
 
0
 
?
 
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
c
o
l
-
s
p
a
n
-
f
u
l
l
 
p
y
-
2
0
 
t
e
x
t
-
c
e
n
t
e
r
 
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
d
a
s
h
e
d
 
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
5
0
0
 
m
b
-
2
"
>
N
o
 
s
e
c
t
i
o
n
s
 
m
a
t
c
h
 
t
h
i
s
 
l
e
v
e
l
.
<
/
p
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
(
)
 
=
>
 
s
e
t
D
i
f
f
F
i
l
t
e
r
(
"
a
l
l
"
)
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
x
s
 
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
l
i
m
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
l
i
m
e
-
4
0
0
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
l
e
a
r
 
f
i
l
t
e
r


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
v
i
s
i
b
l
e
S
e
c
t
i
o
n
s
.
m
a
p
(
(
s
e
c
t
i
o
n
,
 
i
d
x
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
c
t
 
=
 
s
e
c
t
i
o
n
.
t
o
t
a
l
 
>
 
0
 
?
 
M
a
t
h
.
r
o
u
n
d
(
(
s
e
c
t
i
o
n
.
c
o
m
p
l
e
t
e
d
 
/
 
s
e
c
t
i
o
n
.
t
o
t
a
l
)
 
*
 
1
0
0
)
 
:
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
a
s
e
P
a
t
h
 
=
 
"
/
l
e
a
r
n
/
i
n
t
e
r
v
i
e
w
"
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
m
p
l
e
t
e
 
=
 
p
c
t
 
=
=
=
 
1
0
0
 
&
&
 
s
e
c
t
i
o
n
.
t
o
t
a
l
 
>
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
L
o
c
k
e
d
 
=
 
!
s
e
c
t
i
o
n
.
f
r
e
e
T
i
e
r
 
&
&
 
!
i
s
A
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
e
d
;




 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
a
r
d
C
l
a
s
s
 
=


 
 
 
 
 
 
 
 
 
 
 
 
 
 
"
g
r
o
u
p
 
r
e
l
a
t
i
v
e
 
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
 
h
-
f
u
l
l
 
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
"
;




 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
b
o
d
y
 
=
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
C
o
m
p
l
e
t
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
b
s
o
l
u
t
e
 
t
o
p
-
4
 
r
i
g
h
t
-
4
 
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
l
i
m
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
l
i
m
e
-
4
0
0
 
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
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
 
h
-
3
"
 
/
>
 
c
o
m
p
l
e
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
b
s
o
l
u
t
e
 
t
o
p
-
4
 
r
i
g
h
t
-
4
 
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
1
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
o
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
 
h
-
3
"
 
/
>
 
l
o
c
k
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
g
a
p
-
4
 
m
b
-
4
 
p
r
-
1
6
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
?
 
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
w
-
1
4
 
h
-
1
4
 
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
s
t
o
n
e
-
8
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
L
o
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
5
 
h
-
5
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
i
r
c
u
l
a
r
P
r
o
g
r
e
s
s


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s
=
{
p
c
t
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
i
z
e
=
{
5
6
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
{
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
r
o
g
r
e
s
s
C
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
i
s
C
o
m
p
l
e
t
e
 
?
 
"
s
t
r
o
k
e
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
 
:
 
"
s
t
r
o
k
e
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
s
t
r
o
k
e
-
s
t
o
n
e
-
5
0
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
r
a
c
k
C
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
s
t
r
o
k
e
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
s
t
r
o
k
e
-
s
t
o
n
e
-
8
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
C
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
1
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
a
b
u
l
a
r
-
n
u
m
s
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
-
1
 
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
i
n
e
-
c
l
a
m
p
-
1
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
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
i
n
e
-
c
l
a
m
p
-
2
 
m
t
-
1
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
i
s
L
o
c
k
e
d
 
&
&
 
s
e
c
t
i
o
n
.
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
w
-
f
u
l
l
 
h
-
1
 
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
s
t
o
n
e
-
8
0
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
r
o
u
n
d
e
d
-
s
m
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
 
w
i
d
t
h
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
 
w
i
d
t
h
:
 
`
$
{
p
c
t
}
%
`
 
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
6
,
 
d
e
l
a
y
:
 
0
.
1
 
+
 
i
d
x
 
*
 
0
.
0
3
 
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
{
`
h
-
f
u
l
l
 
$
{
i
s
C
o
m
p
l
e
t
e
 
?
 
"
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
 
:
 
p
c
t
 
>
 
0
 
?
 
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
9
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
s
t
o
n
e
-
5
0
"
 
:
 
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
2
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
s
t
o
n
e
-
7
0
0
"
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
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
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
{
i
s
C
o
m
p
l
e
t
e
 
?
 
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
 
:
 
"
"
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
?
 
`
$
{
s
e
c
t
i
o
n
.
t
o
t
a
l
}
 
q
u
e
s
t
i
o
n
s
`
 
:
 
(
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
1
"
>
 
{
i
s
C
o
m
p
l
e
t
e
 
&
&
 
<
C
h
e
c
k
C
i
r
c
l
e
2
 
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
 
h
-
3
"
 
/
>
}
{
s
e
c
t
i
o
n
.
c
o
m
p
l
e
t
e
d
}
 
/
 
{
s
e
c
t
i
o
n
.
t
o
t
a
l
}
 
a
n
s
w
e
r
e
d
<
/
s
p
a
n
>
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
M
e
t
a
C
h
i
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
M
e
t
a
C
h
i
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
{
L
E
V
E
L
_
S
T
Y
L
E
[
s
e
c
t
i
o
n
.
l
e
v
e
l
]
}
>
{
s
e
c
t
i
o
n
.
l
e
v
e
l
}
<
/
M
e
t
a
C
h
i
p
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
1
.
5
 
m
t
-
2
 
m
b
-
4
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
e
a
s
y
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
[
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
x
-
1
.
5
 
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
 
b
o
r
d
e
r
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
$
{
D
I
F
F
_
S
T
Y
L
E
[
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
]
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
e
a
s
y
}
 
e
a
s
y


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
m
e
d
i
u
m
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
[
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
x
-
1
.
5
 
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
 
b
o
r
d
e
r
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
$
{
D
I
F
F
_
S
T
Y
L
E
[
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
]
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
m
e
d
i
u
m
}
 
m
e
d
i
u
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
h
a
r
d
 
>
 
0
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
t
e
x
t
-
[
9
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
x
-
1
.
5
 
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
 
b
o
r
d
e
r
 
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
 
d
u
r
a
t
i
o
n
-
3
0
0


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
$
{
D
I
F
F
_
S
T
Y
L
E
[
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
]
}
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
.
h
a
r
d
}
 
h
a
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
a
u
t
o
 
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
b
e
t
w
e
e
n
 
p
t
-
3
 
b
o
r
d
e
r
-
t
 
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
1
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
5
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
t
e
x
t
-
[
1
1
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
?
 
"
s
i
g
n
 
i
n
 
t
o
 
u
n
l
o
c
k
"
 
:
 
i
s
C
o
m
p
l
e
t
e
 
?
 
"
r
e
v
i
e
w
 
s
e
c
t
i
o
n
"
 
:
 
"
s
t
a
r
t
 
p
r
a
c
t
i
s
i
n
g
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
>


 
 
 
 
 
 
 
 
 
 
 
 
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
s
e
c
t
i
o
n
.
i
d
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
e
l
a
y
:
 
0
.
1
 
+
 
i
d
x
 
*
 
0
.
0
3
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
i
s
L
o
c
k
e
d
 
?
 
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
(
)
 
=
>
 
s
e
t
S
h
o
w
G
a
t
e
(
t
r
u
e
)
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
{
`
$
{
c
a
r
d
C
l
a
s
s
}
 
w
-
f
u
l
l
 
t
e
x
t
-
l
e
f
t
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
o
p
a
c
i
t
y
-
8
0
 
h
o
v
e
r
:
o
p
a
c
i
t
y
-
1
0
0
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
o
d
y
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
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
{
`
$
{
b
a
s
e
P
a
t
h
}
/
$
{
s
e
c
t
i
o
n
.
i
d
}
`
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
{
c
a
r
d
C
l
a
s
s
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
b
o
d
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
}
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
L
o
g
i
n
G
a
t
e
 
o
p
e
n
=
{
s
h
o
w
G
a
t
e
}
 
o
n
C
l
o
s
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
S
h
o
w
G
a
t
e
(
f
a
l
s
e
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


 
 
)
;


}


