
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
 
u
s
e
Q
u
e
r
y
,
 
u
s
e
M
u
t
a
t
i
o
n
,
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
 
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


 
 
P
l
u
s
,


 
 
A
l
e
r
t
T
r
i
a
n
g
l
e
,


 
 
E
x
t
e
r
n
a
l
L
i
n
k
,


 
 
S
e
a
r
c
h
,


 
 
F
i
l
e
T
e
x
t
,


 
 
L
i
s
t
,


 
 
C
l
o
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
 
H
R
M
o
d
a
l
 
f
r
o
m
 
"
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
H
R
M
o
d
a
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
D
o
c
u
m
e
n
t
 
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


i
m
p
o
r
t
 
{
 
B
u
t
t
o
n
 
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
b
u
t
t
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
u
t
i
l
s
"
;




t
y
p
e
 
T
a
b
 
=
 
"
d
o
c
u
m
e
n
t
s
"
 
|
 
"
e
x
p
i
r
i
n
g
"
;




c
o
n
s
t
 
i
n
p
u
t
C
l
a
s
s
 
=


 
 
"
w
-
f
u
l
l
 
p
x
-
3
 
p
y
-
2
 
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
1
0
0
 
p
l
a
c
e
h
o
l
d
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
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
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
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
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
9
0
0
 
d
a
r
k
:
f
o
c
u
s
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
;






f
u
n
c
t
i
o
n
 
f
o
r
m
a
t
D
a
t
e
(
i
s
o
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
n
e
w
 
D
a
t
e
(
i
s
o
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
u
n
d
e
f
i
n
e
d
,
 
{


 
 
 
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,


 
 
 
 
d
a
y
:
 
"
n
u
m
e
r
i
c
"
,


 
 
 
 
y
e
a
r
:
 
"
n
u
m
e
r
i
c
"
,


 
 
}
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
 
d
a
y
s
U
n
t
i
l
(
i
s
o
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
 
{


 
 
c
o
n
s
t
 
d
i
f
f
 
=
 
n
e
w
 
D
a
t
e
(
i
s
o
)
.
g
e
t
T
i
m
e
(
)
 
-
 
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


 
 
r
e
t
u
r
n
 
M
a
t
h
.
c
e
i
l
(
d
i
f
f
 
/
 
(
1
0
0
0
 
*
 
6
0
 
*
 
6
0
 
*
 
2
4
)
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
 
q
u
e
r
y
C
l
i
e
n
t
 
=
 
u
s
e
Q
u
e
r
y
C
l
i
e
n
t
(
)
;


 
 
c
o
n
s
t
 
[
t
a
b
,
 
s
e
t
T
a
b
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
T
a
b
>
(
"
d
o
c
u
m
e
n
t
s
"
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
C
r
e
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
C
r
e
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
f
o
r
m
,
 
s
e
t
F
o
r
m
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
{


 
 
 
 
n
a
m
e
:
 
"
"
,


 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
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
"
,


 
 
 
 
d
o
c
u
m
e
n
t
U
r
l
:
 
"
"
,


 
 
 
 
e
x
p
i
r
y
D
a
t
e
:
 
"
"
,


 
 
 
 
i
s
R
e
q
u
i
r
e
d
:
 
t
r
u
e
,


 
 
}
)
;


 
 
c
o
n
s
t
 
[
s
a
v
i
n
g
,
 
s
e
t
S
a
v
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
s
e
a
r
c
h
,
 
s
e
t
S
e
a
r
c
h
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
"
"
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
o
c
u
m
e
n
t
s
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
:
 
l
o
a
d
i
n
g
D
o
c
s
 
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
.
l
i
s
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
D
o
c
u
m
e
n
t
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
 
{
 
d
a
t
a
:
 
e
x
p
i
r
i
n
g
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
:
 
l
o
a
d
i
n
g
E
x
p
i
r
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
.
e
x
p
i
r
i
n
g
(
3
0
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
/
e
x
p
i
r
i
n
g
?
d
a
y
s
=
3
0
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
D
o
c
u
m
e
n
t
[
]
;


 
 
 
 
}
,


 
 
 
 
e
n
a
b
l
e
d
:
 
t
a
b
 
=
=
=
 
"
e
x
p
i
r
i
n
g
"
,


 
 
}
)
;




 
 
c
o
n
s
t
 
c
r
e
a
t
e
M
u
t
a
t
i
o
n
 
=
 
u
s
e
M
u
t
a
t
i
o
n
(
{


 
 
 
 
m
u
t
a
t
i
o
n
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


 
 
 
 
 
 
s
e
t
S
a
v
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
o
s
t
(
"
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
 
{


 
 
 
 
 
 
 
 
.
.
.
f
o
r
m
,


 
 
 
 
 
 
 
 
e
x
p
i
r
y
D
a
t
e
:
 
f
o
r
m
.
e
x
p
i
r
y
D
a
t
e
 
?
 
n
e
w
 
D
a
t
e
(
f
o
r
m
.
e
x
p
i
r
y
D
a
t
e
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
 
:
 
u
n
d
e
f
i
n
e
d
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,


 
 
 
 
o
n
S
u
c
c
e
s
s
:
 
(
)
 
=
>
 
{


 
 
 
 
 
 
q
u
e
r
y
C
l
i
e
n
t
.
i
n
v
a
l
i
d
a
t
e
Q
u
e
r
i
e
s
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
 
[
"
h
r
"
,
 
"
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
]
 
}
)
;


 
 
 
 
 
 
s
e
t
S
h
o
w
C
r
e
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


 
 
 
 
 
 
s
e
t
F
o
r
m
(
{


 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
"
,


 
 
 
 
 
 
 
 
c
a
t
e
g
o
r
y
:
 
"
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
"
,


 
 
 
 
 
 
 
 
d
o
c
u
m
e
n
t
U
r
l
:
 
"
"
,


 
 
 
 
 
 
 
 
e
x
p
i
r
y
D
a
t
e
:
 
"
"
,


 
 
 
 
 
 
 
 
i
s
R
e
q
u
i
r
e
d
:
 
t
r
u
e
,


 
 
 
 
 
 
}
)
;


 
 
 
 
}
,


 
 
 
 
o
n
S
e
t
t
l
e
d
:
 
(
)
 
=
>
 
s
e
t
S
a
v
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
,


 
 
}
)
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
L
i
s
t
 
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
 
t
a
b
 
=
=
=
 
"
d
o
c
u
m
e
n
t
s
"
 
?
 
d
o
c
u
m
e
n
t
s
 
?
?
 
[
]
 
:
 
e
x
p
i
r
i
n
g
 
?
?
 
[
]
,
 
[
t
a
b
,
 
d
o
c
u
m
e
n
t
s
,
 
e
x
p
i
r
i
n
g
]
)
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
a
d
i
n
g
 
=
 
t
a
b
 
=
=
=
 
"
d
o
c
u
m
e
n
t
s
"
 
?
 
l
o
a
d
i
n
g
D
o
c
s
 
:
 
l
o
a
d
i
n
g
E
x
p
i
r
i
n
g
;




 
 
c
o
n
s
t
 
f
i
l
t
e
r
e
d
 
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


 
 
 
 
c
o
n
s
t
 
q
 
=
 
s
e
a
r
c
h
.
t
r
i
m
(
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


 
 
 
 
i
f
 
(
!
q
)
 
r
e
t
u
r
n
 
b
a
s
e
L
i
s
t
;


 
 
 
 
r
e
t
u
r
n
 
b
a
s
e
L
i
s
t
.
f
i
l
t
e
r
(


 
 
 
 
 
 
(
d
)
 
=
>


 
 
 
 
 
 
 
 
d
.
n
a
m
e
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
q
)
 
|
|


 
 
 
 
 
 
 
 
d
.
c
a
t
e
g
o
r
y
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
q
)
 
|
|


 
 
 
 
 
 
 
 
(
d
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
 
|
|
 
"
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
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
q
)
,


 
 
 
 
)
;


 
 
}
,
 
[
b
a
s
e
L
i
s
t
,
 
s
e
a
r
c
h
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


 
 
 
 
c
o
n
s
t
 
l
i
s
t
 
=
 
d
o
c
u
m
e
n
t
s
 
?
?
 
[
]
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
 
l
i
s
t
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
 
r
e
q
u
i
r
e
d
 
=
 
l
i
s
t
.
f
i
l
t
e
r
(
(
d
)
 
=
>
 
d
.
i
s
R
e
q
u
i
r
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
 
e
x
p
i
r
i
n
g
S
o
o
n
 
=


 
 
 
 
 
 
e
x
p
i
r
i
n
g
?
.
l
e
n
g
t
h
 
?
?


 
 
 
 
 
 
l
i
s
t
.
f
i
l
t
e
r
(


 
 
 
 
 
 
 
 
(
d
)
 
=
>
 
d
.
e
x
p
i
r
y
D
a
t
e
 
&
&
 
d
a
y
s
U
n
t
i
l
(
d
.
e
x
p
i
r
y
D
a
t
e
)
 
<
=
 
3
0
 
&
&
 
d
a
y
s
U
n
t
i
l
(
d
.
e
x
p
i
r
y
D
a
t
e
)
 
>
=
 
0
,


 
 
 
 
 
 
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
 
t
o
t
a
l
,
 
r
e
q
u
i
r
e
d
,
 
e
x
p
i
r
i
n
g
S
o
o
n
 
}
;


 
 
}
,
 
[
d
o
c
u
m
e
n
t
s
,
 
e
x
p
i
r
i
n
g
]
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
 
n
o
I
n
d
e
x
 
/
>




 
 
 
 
 
 
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
4
"
>


 
 
 
 
 
 
 
 
 
 
<
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
o
l
i
c
i
e
s
 
&
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
o
c
u
m
e
n
t
s
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
v
e
r
y
t
h
i
n
g
 
t
h
e
 
t
e
a
m
 
n
e
e
d
s
 
t
o
 
s
i
g
n
,
 
r
e
n
e
w
,
 
o
r
 
k
e
e
p
 
o
n
 
f
i
l
e
.
 
E
x
p
i
r
i
n
g
 
i
t
e
m
s
 
b
u
b
b
l
e
 
u
p
 
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
d
i
v
>




 
 
 
 
 
 
 
 
 
 
<
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"
 
s
i
z
e
=
"
m
d
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
S
h
o
w
C
r
e
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
>


 
 
 
 
 
 
 
 
 
 
 
 
<
P
l
u
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


 
 
 
 
 
 
 
 
 
 
 
 
A
d
d
 
d
o
c
u
m
e
n
t


 
 
 
 
 
 
 
 
 
 
<
/
B
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
6
 
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
3
 
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
"
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
t
o
t
a
l
"
 
v
a
l
u
e
=
{
t
o
t
a
l
s
.
t
o
t
a
l
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t
 
l
a
b
e
l
=
"
r
e
q
u
i
r
e
d
"
 
v
a
l
u
e
=
{
t
o
t
a
l
s
.
r
e
q
u
i
r
e
d
}
 
d
o
t
C
l
a
s
s
=
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
 
/
>


 
 
 
 
 
 
 
 
 
 
<
S
t
a
t


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
e
x
p
i
r
i
n
g
 
3
0
d
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
t
o
t
a
l
s
.
e
x
p
i
r
i
n
g
S
o
o
n
}


 
 
 
 
 
 
 
 
 
 
 
 
d
o
t
C
l
a
s
s
=
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
h
e
a
d
e
r
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
b
-
6
 
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
-
0
.
5
"
>


 
 
 
 
 
 
 
 
 
 
{
(


 
 
 
 
 
 
 
 
 
 
 
 
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
k
e
y
:
 
"
d
o
c
u
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
A
l
l
 
d
o
c
u
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
 
L
i
s
t
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
k
e
y
:
 
"
e
x
p
i
r
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
E
x
p
i
r
i
n
g
 
s
o
o
n
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
t
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
t
a
b
 
=
=
=
 
t
.
k
e
y
;


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
t
.
k
e
y
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
 
s
e
t
T
a
b
(
t
.
k
e
y
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
3
 
p
y
-
1
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
s
m
 
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
e
d
i
u
m
 
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
c
t
i
v
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
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
3
.
5
 
h
-
3
.
5
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
t
.
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
-
1
 
m
i
n
-
w
-
6
0
 
m
a
x
-
w
-
s
m
"
>


 
 
 
 
 
 
 
 
 
 
<
S
e
a
r
c
h
 
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
 
l
e
f
t
-
3
 
t
o
p
-
1
/
2
 
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
1
/
2
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
s
e
a
r
c
h
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
S
e
a
r
c
h
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
e
a
r
c
h
 
n
a
m
e
,
 
c
a
t
e
g
o
r
y
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
w
-
f
u
l
l
 
p
l
-
9
 
p
r
-
3
 
p
y
-
2
 
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
1
0
0
 
p
l
a
c
e
h
o
l
d
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
4
0
0
 
d
a
r
k
:
p
l
a
c
e
h
o
l
d
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
0
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
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
9
0
0
 
d
a
r
k
:
f
o
c
u
s
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


 
 
 
 
 
 
 
 
 
 
{
t
a
b
 
=
=
=
 
"
d
o
c
u
m
e
n
t
s
"
 
?
 
"
d
o
c
u
m
e
n
t
s
 
o
n
 
f
i
l
e
"
 
:
 
"
e
x
p
i
r
i
n
g
 
w
i
t
h
i
n
 
3
0
 
d
a
y
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
/
d
i
v
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
 
(


 
 
 
 
 
 
 
 
<
L
i
s
t
S
k
e
l
e
t
o
n
 
/
>


 
 
 
 
 
 
)
 
:
 
f
i
l
t
e
r
e
d
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
E
m
p
t
y
S
t
a
t
e


 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
t
a
b
 
=
=
=
 
"
e
x
p
i
r
i
n
g
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
N
o
t
h
i
n
g
 
e
x
p
i
r
i
n
g
 
s
o
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
b
a
s
e
L
i
s
t
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
 
"
N
o
 
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
 
d
o
c
u
m
e
n
t
s
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
N
o
 
m
a
t
c
h
e
s
"


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
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
{


 
 
 
 
 
 
 
 
 
 
 
 
t
a
b
 
=
=
=
 
"
e
x
p
i
r
i
n
g
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
Y
o
u
'
r
e
 
c
l
e
a
r
 
f
o
r
 
t
h
e
 
n
e
x
t
 
3
0
 
d
a
y
s
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
b
a
s
e
L
i
s
t
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
 
"
A
d
d
 
p
o
l
i
c
i
e
s
,
 
t
r
a
i
n
i
n
g
 
r
e
c
o
r
d
s
,
 
o
r
 
s
a
f
e
t
y
 
d
o
c
s
 
t
o
 
s
t
a
r
t
 
t
r
a
c
k
i
n
g
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
T
r
y
 
a
 
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
e
a
r
c
h
 
t
e
r
m
.
"


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
 
 
o
n
A
c
t
i
o
n
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
C
r
e
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


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
)
 
:
 
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
 
d
i
v
i
d
e
-
y
 
d
i
v
i
d
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
d
i
v
i
d
e
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


 
 
 
 
 
 
 
 
 
 
{
f
i
l
t
e
r
e
d
.
m
a
p
(
(
d
o
c
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
y
s
 
=
 
d
o
c
.
e
x
p
i
r
y
D
a
t
e
 
?
 
d
a
y
s
U
n
t
i
l
(
d
o
c
.
e
x
p
i
r
y
D
a
t
e
)
 
:
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
x
p
i
r
i
n
g
S
o
o
n
 
=
 
d
a
y
s
 
!
=
=
 
n
u
l
l
 
&
&
 
d
a
y
s
 
<
=
 
3
0
 
&
&
 
d
a
y
s
 
>
=
 
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
e
x
p
i
r
e
d
 
=
 
d
a
y
s
 
!
=
=
 
n
u
l
l
 
&
&
 
d
a
y
s
 
<
 
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
d
o
c
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
e
l
a
y
:
 
i
 
*
 
0
.
0
2
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
 
p
x
-
4
 
p
y
-
3
 
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
5
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
/
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
0
.
5
 
w
-
9
 
h
-
9
 
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
 
f
l
e
x
-
1
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
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
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
d
o
c
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
c
.
c
a
t
e
g
o
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
c
.
i
s
R
e
q
u
i
r
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
r
e
d
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
r
e
d
-
4
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
 
r
o
u
n
d
e
d
-
f
u
l
l
 
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
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
u
i
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
x
p
i
r
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
r
e
d
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
r
e
d
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
p
i
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
!
e
x
p
i
r
e
d
 
&
&
 
e
x
p
i
r
i
n
g
S
o
o
n
 
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
a
m
b
e
r
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
a
m
b
e
r
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
l
e
r
t
T
r
i
a
n
g
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
a
y
s
 
=
=
=
 
0
 
?
 
"
d
u
e
 
t
o
d
a
y
"
 
:
 
`
$
{
d
a
y
s
}
d
 
l
e
f
t
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
c
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
m
t
-
0
.
5
 
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
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
c
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
m
t
-
1
 
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
1
p
x
]
 
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
d
o
c
.
e
x
p
i
r
y
D
a
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
l
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
p
i
r
e
s
 
{
f
o
r
m
a
t
D
a
t
e
(
d
o
c
.
e
x
p
i
r
y
D
a
t
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
d
o
c
.
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
d
B
y
?
.
l
e
n
g
t
h
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
F
i
l
e
T
e
x
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
c
.
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
d
B
y
.
l
e
n
g
t
h
}
 
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
d
o
c
.
d
o
c
u
m
e
n
t
U
r
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
r
e
f
=
{
d
o
c
.
d
o
c
u
m
e
n
t
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
a
r
g
e
t
=
"
_
b
l
a
n
k
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
l
=
"
n
o
o
p
e
n
e
r
 
n
o
r
e
f
e
r
r
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
O
p
e
n
 
d
o
c
u
m
e
n
t
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
s
h
r
i
n
k
-
0
 
p
-
1
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
8
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
E
x
t
e
r
n
a
l
L
i
n
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
4
 
h
-
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
a
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
H
R
M
o
d
a
l


 
 
 
 
 
 
 
 
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
C
r
e
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
C
r
e
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


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
A
d
d
 
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
 
D
o
c
u
m
e
n
t
"


 
 
 
 
 
 
 
 
o
n
S
u
b
m
i
t
=
{
(
)
 
=
>
 
c
r
e
a
t
e
M
u
t
a
t
i
o
n
.
m
u
t
a
t
e
(
)
}


 
 
 
 
 
 
 
 
l
o
a
d
i
n
g
=
{
s
a
v
i
n
g
}


 
 
 
 
 
 
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
s
p
a
c
e
-
y
-
4
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
{
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
}
>
d
o
c
u
m
e
n
t
 
n
a
m
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
n
a
m
e
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
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
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
A
n
t
i
-
h
a
r
a
s
s
m
e
n
t
 
p
o
l
i
c
y
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
{
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
}
>
c
a
t
e
g
o
r
y
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
c
a
t
e
g
o
r
y
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
c
a
t
e
g
o
r
y
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
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
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
L
e
g
a
l
,
 
S
a
f
e
t
y
,
 
T
r
a
i
n
i
n
g
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
{
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
}
>
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
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
a
r
e
a


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
F
o
r
m
(
{
 
.
.
.
f
o
r
m
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
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
o
w
s
=
{
2
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
i
n
p
u
t
C
l
a
s
s
}
 
r
e
s
i
z
e
-
n
o
n
e
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
S
h
o
r
t
 
n
o
t
e
 
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
h
i
s
 
c
o
v
e
r
s
.
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
{
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
}
>
d
o
c
u
m
e
n
t
 
u
r
l
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
d
o
c
u
m
e
n
t
U
r
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
d
o
c
u
m
e
n
t
U
r
l
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
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
i
n
p
u
t
C
l
a
s
s
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
h
t
t
p
s
:
/
/
.
.
.
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
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
{
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
}
>
e
x
p
i
r
y
 
d
a
t
e
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
d
a
t
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
f
o
r
m
.
e
x
p
i
r
y
D
a
t
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
e
x
p
i
r
y
D
a
t
e
:
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
 
}
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
i
n
p
u
t
C
l
a
s
s
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
l
a
b
e
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
 
p
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
c
h
e
c
k
b
o
x
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
h
e
c
k
e
d
=
{
f
o
r
m
.
i
s
R
e
q
u
i
r
e
d
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
F
o
r
m
(
{
 
.
.
.
f
o
r
m
,
 
i
s
R
e
q
u
i
r
e
d
:
 
e
.
t
a
r
g
e
t
.
c
h
e
c
k
e
d
 
}
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
r
o
u
n
d
e
d
 
a
c
c
e
n
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
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
q
u
i
r
e
d
 
f
o
r
 
a
l
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
a
b
e
l
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
/
H
R
M
o
d
a
l
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


 
 
d
o
t
C
l
a
s
s
,


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
 
|
 
s
t
r
i
n
g
;


 
 
d
o
t
C
l
a
s
s
?
:
 
s
t
r
i
n
g
;


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


 
 
 
 
 
 
 
 
{
d
o
t
C
l
a
s
s
 
&
&
 
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
.
5
 
w
-
1
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
f
u
l
l
 
$
{
d
o
t
C
l
a
s
s
}
`
}
 
/
>
}


 
 
 
 
 
 
 
 
{
l
a
b
e
l
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
0
.
5
 
t
e
x
t
-
l
g
 
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
i
s
t
S
k
e
l
e
t
o
n
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
 
d
i
v
i
d
e
-
y
 
d
i
v
i
d
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
d
i
v
i
d
e
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
 
5
 
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
 
p
x
-
4
 
p
y
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
9
 
h
-
9
 
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
 
s
p
a
c
e
-
y
-
2
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
3
.
5
 
w
-
1
/
3
 
r
o
u
n
d
e
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
2
.
5
 
w
-
2
/
3
 
r
o
u
n
d
e
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
2
.
5
 
w
-
1
/
2
 
r
o
u
n
d
e
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
 
E
m
p
t
y
S
t
a
t
e
(
{


 
 
t
i
t
l
e
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
,


 
 
o
n
A
c
t
i
o
n
,


}
:
 
{


 
 
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


 
 
o
n
A
c
t
i
o
n
:
 
(
)
 
=
>
 
v
o
i
d
;


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
6
 
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
2
 
h
-
1
2
 
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
4
"
>


 
 
 
 
 
 
 
 
<
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
s
e
m
i
b
o
l
d
 
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
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
{
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
5
0
0
 
m
a
x
-
w
-
x
s
 
m
b
-
5
"
>
{
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
B
u
t
t
o
n
 
v
a
r
i
a
n
t
=
"
p
r
i
m
a
r
y
"
 
s
i
z
e
=
"
s
m
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
o
n
A
c
t
i
o
n
}
>


 
 
 
 
 
 
 
 
<
P
l
u
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


 
 
 
 
 
 
 
 
A
d
d
 
d
o
c
u
m
e
n
t


 
 
 
 
 
 
<
/
B
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
;


}


