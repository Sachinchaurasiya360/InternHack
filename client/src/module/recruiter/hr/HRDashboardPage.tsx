
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
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
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


 
 
U
s
e
r
s
,


 
 
U
s
e
r
P
l
u
s
,


 
 
C
a
l
e
n
d
a
r
D
a
y
s
,


 
 
C
l
o
c
k
,


 
 
C
h
e
c
k
S
q
u
a
r
e
,


 
 
W
a
l
l
e
t
,


 
 
A
r
r
o
w
R
i
g
h
t
,


 
 
B
r
i
e
f
c
a
s
e
,


 
 
R
e
c
e
i
p
t
,


 
 
S
h
i
e
l
d
C
h
e
c
k
,


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
;


i
m
p
o
r
t
 
{
 
h
r
K
e
y
s
 
}
 
f
r
o
m
 
"
.
/
h
r
-
q
u
e
r
y
-
k
e
y
s
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
 
H
R
D
a
s
h
b
o
a
r
d
D
a
t
a
 
}
 
f
r
o
m
 
"
.
/
h
r
-
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




t
y
p
e
 
S
t
a
t
I
t
e
m
 
=
 
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


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;


 
 
h
i
n
t
?
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
c
e
n
t
?
:
 
"
d
e
f
a
u
l
t
"
 
|
 
"
w
a
r
n
"
 
|
 
"
s
u
c
c
e
s
s
"
 
|
 
"
d
a
n
g
e
r
"
;


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
 
H
R
D
a
s
h
b
o
a
r
d
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
 
{
 
d
a
t
a
,
 
i
s
L
o
a
d
i
n
g
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
h
r
K
e
y
s
.
a
n
a
l
y
t
i
c
s
.
d
a
s
h
b
o
a
r
d
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
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


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
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
h
r
/
a
n
a
l
y
t
i
c
s
/
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
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
.
d
a
t
a
 
a
s
 
H
R
D
a
s
h
b
o
a
r
d
D
a
t
a
;


 
 
 
 
}
,


 
 
}
)
;




 
 
c
o
n
s
t
 
{
 
d
a
t
a
:
 
d
e
p
t
D
a
t
a
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
h
r
K
e
y
s
.
a
n
a
l
y
t
i
c
s
.
h
e
a
d
c
o
u
n
t
D
e
p
t
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
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


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
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
h
r
/
a
n
a
l
y
t
i
c
s
/
h
e
a
d
c
o
u
n
t
/
d
e
p
a
r
t
m
e
n
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
 
r
e
s
.
d
a
t
a
 
a
s
 
{
 
d
e
p
a
r
t
m
e
n
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
 
}
[
]
;


 
 
 
 
}
,


 
 
}
)
;




 
 
c
o
n
s
t
 
s
t
a
t
s
:
 
S
t
a
t
I
t
e
m
[
]
 
=
 
[


 
 
 
 
{
 
l
a
b
e
l
:
 
"
t
o
t
a
l
 
e
m
p
l
o
y
e
e
s
"
,
 
v
a
l
u
e
:
 
d
a
t
a
?
.
t
o
t
a
l
E
m
p
l
o
y
e
e
s
 
?
?
 
0
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
a
c
t
i
v
e
 
t
o
d
a
y
"
,
 
v
a
l
u
e
:
 
d
a
t
a
?
.
a
c
t
i
v
e
E
m
p
l
o
y
e
e
s
 
?
?
 
0
,
 
a
c
c
e
n
t
:
 
"
s
u
c
c
e
s
s
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
o
n
 
l
e
a
v
e
"
,
 
v
a
l
u
e
:
 
d
a
t
a
?
.
o
n
L
e
a
v
e
T
o
d
a
y
 
?
?
 
0
,
 
a
c
c
e
n
t
:
 
"
w
a
r
n
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
p
e
n
d
i
n
g
 
l
e
a
v
e
"
,
 
v
a
l
u
e
:
 
d
a
t
a
?
.
p
e
n
d
i
n
g
L
e
a
v
e
R
e
q
u
e
s
t
s
 
?
?
 
0
,
 
a
c
c
e
n
t
:
 
"
w
a
r
n
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
o
p
e
n
 
t
a
s
k
s
"
,
 
v
a
l
u
e
:
 
d
a
t
a
?
.
o
p
e
n
T
a
s
k
s
 
?
?
 
0
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
n
e
w
 
h
i
r
e
s
"
,
 
v
a
l
u
e
:
 
d
a
t
a
?
.
n
e
w
H
i
r
e
s
T
h
i
s
M
o
n
t
h
 
?
?
 
0
,
 
h
i
n
t
:
 
"
t
h
i
s
 
m
o
n
t
h
"
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
u
p
c
o
m
i
n
g
 
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
"
,
 
v
a
l
u
e
:
 
d
a
t
a
?
.
u
p
c
o
m
i
n
g
I
n
t
e
r
v
i
e
w
s
 
?
?
 
0
 
}
,


 
 
 
 
{
 
l
a
b
e
l
:
 
"
p
e
n
d
i
n
g
 
r
e
i
m
b
u
r
s
e
m
e
n
t
s
"
,
 
v
a
l
u
e
:
 
d
a
t
a
?
.
p
e
n
d
i
n
g
R
e
i
m
b
u
r
s
e
m
e
n
t
s
 
?
?
 
0
,
 
a
c
c
e
n
t
:
 
"
d
a
n
g
e
r
"
 
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
c
k
A
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
o
:
 
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
/
e
m
p
l
o
y
e
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
E
m
p
l
o
y
e
e
s
"
,
 
i
c
o
n
:
 
U
s
e
r
s
 
}
,


 
 
 
 
{
 
t
o
:
 
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
/
l
e
a
v
e
"
,
 
l
a
b
e
l
:
 
"
L
e
a
v
e
 
r
e
q
u
e
s
t
s
"
,
 
i
c
o
n
:
 
C
a
l
e
n
d
a
r
D
a
y
s
 
}
,


 
 
 
 
{
 
t
o
:
 
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
/
a
t
t
e
n
d
a
n
c
e
"
,
 
l
a
b
e
l
:
 
"
A
t
t
e
n
d
a
n
c
e
"
,
 
i
c
o
n
:
 
C
l
o
c
k
 
}
,


 
 
 
 
{
 
t
o
:
 
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
/
p
a
y
r
o
l
l
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
n
 
p
a
y
r
o
l
l
"
,
 
i
c
o
n
:
 
W
a
l
l
e
t
 
}
,


 
 
 
 
{
 
t
o
:
 
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
/
t
a
s
k
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
H
R
 
t
a
s
k
s
"
,
 
i
c
o
n
:
 
C
h
e
c
k
S
q
u
a
r
e
 
}
,


 
 
 
 
{
 
t
o
:
 
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
/
o
n
b
o
a
r
d
i
n
g
"
,
 
l
a
b
e
l
:
 
"
O
n
b
o
a
r
d
i
n
g
"
,
 
i
c
o
n
:
 
U
s
e
r
P
l
u
s
 
}
,


 
 
 
 
{
 
t
o
:
 
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
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
I
n
t
e
r
v
i
e
w
s
"
,
 
i
c
o
n
:
 
B
r
i
e
f
c
a
s
e
 
}
,


 
 
 
 
{
 
t
o
:
 
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
/
r
e
i
m
b
u
r
s
e
m
e
n
t
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
e
i
m
b
u
r
s
e
m
e
n
t
s
"
,
 
i
c
o
n
:
 
R
e
c
e
i
p
t
 
}
,


 
 
 
 
{
 
t
o
:
 
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
/
c
o
m
p
l
i
a
n
c
e
"
,
 
l
a
b
e
l
:
 
"
C
o
m
p
l
i
a
n
c
e
"
,
 
i
c
o
n
:
 
S
h
i
e
l
d
C
h
e
c
k
 
}
,


 
 
]
;




 
 
c
o
n
s
t
 
m
a
x
D
e
p
t
C
o
u
n
t
 
=
 
d
e
p
t
D
a
t
a
 
?
 
M
a
t
h
.
m
a
x
(
.
.
.
d
e
p
t
D
a
t
a
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
 
d
.
c
o
u
n
t
)
,
 
1
)
 
:
 
1
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
m
a
x
-
w
-
7
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
H
R
 
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
 
n
o
I
n
d
e
x
 
/
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
h
e
a
d
e
r
 
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
6
 
m
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
3
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


 
 
 
 
 
 
 
 
 
 
 
 
r
e
c
r
u
i
t
e
r
 
/
 
h
r


 
 
 
 
 
 
 
 
 
 
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
4
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


 
 
 
 
 
 
 
 
 
 
P
e
o
p
l
e
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


 
 
 
 
 
 
 
 
 
 
 
 
o
v
e
r
v
i
e
w
.


 
 
 
 
 
 
 
 
 
 
 
 
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
e
l
a
y
:
 
0
.
2
5
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
 
0
.
5
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
a
b
s
o
l
u
t
e
 
-
b
o
t
t
o
m
-
0
.
5
 
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
0
.
7
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
2
 
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
x
l
"
>


 
 
 
 
 
 
 
 
 
 
H
e
a
d
c
o
u
n
t
,
 
l
e
a
v
e
,
 
t
a
s
k
s
,
 
a
n
d
 
p
a
y
r
o
l
l
 
a
t
 
a
 
g
l
a
n
c
e
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
h
e
a
d
e
r
>




 
 
 
 
 
 
{
/
*
 
S
t
a
t
 
t
i
l
e
s
 
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
2
 
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
4
 
g
a
p
-
p
x
 
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
w
h
i
t
e
/
1
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
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
{
s
t
a
t
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>


 
 
 
 
 
 
 
 
 
 
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
i
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
5
0
 
p
x
-
4
 
p
y
-
5
 
a
n
i
m
a
t
e
-
p
u
l
s
e
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
h
-
2
 
w
-
2
0
 
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
9
0
0
 
r
o
u
n
d
e
d
 
m
b
-
3
"
 
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
h
-
6
 
w
-
1
0
 
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
9
0
0
 
r
o
u
n
d
e
d
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
S
t
a
t
T
i
l
e
 
k
e
y
=
{
s
.
l
a
b
e
l
}
 
{
.
.
.
s
}
 
/
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
 
T
w
o
-
c
o
l
u
m
n
 
c
o
n
t
e
n
t
 
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
5
 
g
a
p
-
6
"
>


 
 
 
 
 
 
 
 
{
/
*
 
Q
u
i
c
k
 
a
c
t
i
o
n
s
 
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
s
e
c
t
i
o
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
3
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
l
g
:
c
o
l
-
s
p
a
n
-
2
 
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
5
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
 
p
-
5
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
2
 
m
b
-
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
q
u
i
c
k
 
a
c
t
i
o
n
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
u
l
 
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
s
p
a
c
e
-
y
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
q
u
i
c
k
A
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
a
c
t
i
o
n
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
a
c
t
i
o
n
.
t
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
{
a
c
t
i
o
n
.
t
o
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
 
p
x
-
3
 
p
y
-
2
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
 
h
o
v
e
r
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
1
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a
c
t
i
o
n
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
"
w
-
4
 
h
-
4
 
s
h
r
i
n
k
-
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
s
t
o
n
e
-
5
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
 
/
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
f
l
e
x
-
1
 
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
m
e
d
i
u
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
8
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
2
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
c
t
i
o
n
.
l
a
b
e
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
A
r
r
o
w
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
3
.
5
 
h
-
3
.
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
3
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
7
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
s
t
o
n
e
-
5
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
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
s
e
c
t
i
o
n
>




 
 
 
 
 
 
 
 
{
/
*
 
D
e
p
a
r
t
m
e
n
t
 
h
e
a
d
c
o
u
n
t
 
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
s
e
c
t
i
o
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
3
,
 
d
e
l
a
y
:
 
0
.
2
 
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
l
g
:
c
o
l
-
s
p
a
n
-
3
 
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
5
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
 
p
-
5
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
2
 
m
b
-
4
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
e
p
a
r
t
m
e
n
t
 
h
e
a
d
c
o
u
n
t


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
{
!
d
e
p
t
D
a
t
a
 
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
4
 
}
)
.
m
a
p
(
(
_
,
 
i
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
i
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
 
a
n
i
m
a
t
e
-
p
u
l
s
e
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
2
8
 
h
-
3
 
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
9
0
0
 
r
o
u
n
d
e
d
"
 
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
f
l
e
x
-
1
 
h
-
3
 
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
9
0
0
 
r
o
u
n
d
e
d
"
 
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
w
-
6
 
h
-
3
 
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
9
0
0
 
r
o
u
n
d
e
d
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
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
d
e
p
t
D
a
t
a
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
 
p
y
-
1
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
 
m
b
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
U
s
e
r
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
5
0
0
"
>
N
o
 
d
e
p
a
r
t
m
e
n
t
 
d
a
t
a
 
y
e
t
.
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
o
=
"
/
r
e
c
r
u
i
t
e
r
s
/
h
r
/
d
e
p
a
r
t
m
e
n
t
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
r
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
d
d
 
d
e
p
a
r
t
m
e
n
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
r
r
o
w
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
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
u
l
 
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
s
p
a
c
e
-
y
-
3
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
p
t
D
a
t
a
.
m
a
p
(
(
d
e
p
t
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
 
k
e
y
=
{
d
e
p
t
.
d
e
p
a
r
t
m
e
n
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
w
-
3
2
 
t
r
u
n
c
a
t
e
 
t
e
x
t
-
x
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
p
t
.
d
e
p
a
r
t
m
e
n
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
 
h
-
2
 
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
9
0
0
 
r
o
u
n
d
e
d
 
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
(
d
e
p
t
.
c
o
u
n
t
 
/
 
m
a
x
D
e
p
t
C
o
u
n
t
)
 
*
 
1
0
0
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
5
,
 
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
 
*
 
i
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
w
-
8
 
t
e
x
t
-
r
i
g
h
t
 
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
e
p
t
.
c
o
u
n
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
/
l
i
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
u
l
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
s
e
c
t
i
o
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
 
S
t
a
t
T
i
l
e
(
{
 
l
a
b
e
l
,
 
v
a
l
u
e
,
 
h
i
n
t
,
 
a
c
c
e
n
t
 
=
 
"
d
e
f
a
u
l
t
"
 
}
:
 
S
t
a
t
I
t
e
m
)
 
{


 
 
c
o
n
s
t
 
d
o
t
 
=


 
 
 
 
a
c
c
e
n
t
 
=
=
=
 
"
w
a
r
n
"


 
 
 
 
 
 
?
 
"
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
0
"


 
 
 
 
 
 
:
 
a
c
c
e
n
t
 
=
=
=
 
"
d
a
n
g
e
r
"


 
 
 
 
 
 
 
 
?
 
"
b
g
-
r
e
d
-
5
0
0
"


 
 
 
 
 
 
 
 
:
 
a
c
c
e
n
t
 
=
=
=
 
"
s
u
c
c
e
s
s
"


 
 
 
 
 
 
 
 
 
 
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
4
0
0
"
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
5
0
 
p
x
-
4
 
p
y
-
5
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
1
.
5
 
m
b
-
1
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
{
`
h
-
1
 
w
-
1
 
$
{
d
o
t
}
`
}
 
/
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
l
a
b
e
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
>


 
 
 
 
 
 
 
 
{
v
a
l
u
e
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
{
h
i
n
t
 
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
t
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
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
{
h
i
n
t
}


 
 
 
 
 
 
 
 
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


