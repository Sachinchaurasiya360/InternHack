
i
m
p
o
r
t
 
{
 
B
r
a
i
n
,
 
T
a
r
g
e
t
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
 
M
a
p
,
 
B
o
o
k
O
p
e
n
 
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
 
m
e
m
o
 
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
 
W
e
a
k
A
r
e
a
 
{


 
 
t
y
p
e
:
 
"
d
s
a
"
 
|
 
"
a
p
t
i
t
u
d
e
"
 
|
 
"
s
k
i
l
l
"
 
|
 
"
a
t
s
"
 
|
 
"
r
o
a
d
m
a
p
"
;


 
 
t
o
p
i
c
:
 
s
t
r
i
n
g
;


 
 
t
o
p
i
c
S
l
u
g
?
:
 
s
t
r
i
n
g
;


 
 
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
;


 
 
s
c
o
r
e
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




c
o
n
s
t
 
T
Y
P
E
_
C
O
N
F
I
G
 
=
 
{


 
 
d
s
a
:
 
{


 
 
 
 
l
a
b
e
l
:
 
"
D
S
A
"
,


 
 
 
 
i
c
o
n
:
 
B
r
a
i
n
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
v
i
o
l
e
t
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
v
i
o
l
e
t
-
4
0
0
"
,


 
 
 
 
s
c
o
r
e
C
l
s
:
 
"
t
e
x
t
-
v
i
o
l
e
t
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
v
i
o
l
e
t
-
4
0
0
"
,


 
 
}
,


 
 
a
p
t
i
t
u
d
e
:
 
{


 
 
 
 
l
a
b
e
l
:
 
"
A
p
t
i
t
u
d
e
"
,


 
 
 
 
i
c
o
n
:
 
T
a
r
g
e
t
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
,


 
 
 
 
s
c
o
r
e
C
l
s
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
,


 
 
}
,


 
 
s
k
i
l
l
:
 
{


 
 
 
 
l
a
b
e
l
:
 
"
S
k
i
l
l
"
,


 
 
 
 
i
c
o
n
:
 
B
o
o
k
O
p
e
n
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
r
o
s
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
r
o
s
e
-
4
0
0
"
,


 
 
 
 
s
c
o
r
e
C
l
s
:
 
"
t
e
x
t
-
r
o
s
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
r
o
s
e
-
4
0
0
"
,


 
 
}
,


 
 
a
t
s
:
 
{


 
 
 
 
l
a
b
e
l
:
 
"
R
e
s
u
m
e
"
,


 
 
 
 
i
c
o
n
:
 
F
i
l
e
T
e
x
t
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
b
l
u
e
-
4
0
0
"
,


 
 
 
 
s
c
o
r
e
C
l
s
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
b
l
u
e
-
4
0
0
"
,


 
 
}
,


 
 
r
o
a
d
m
a
p
:
 
{


 
 
 
 
l
a
b
e
l
:
 
"
R
o
a
d
m
a
p
"
,


 
 
 
 
i
c
o
n
:
 
M
a
p
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
"
,


 
 
 
 
s
c
o
r
e
C
l
s
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
"
,


 
 
}
,


}
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
 
P
r
o
p
s
 
{


 
 
a
r
e
a
:
 
W
e
a
k
A
r
e
a
;


 
 
i
n
d
e
x
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
 
c
o
n
s
t
 
R
e
c
o
m
m
e
n
d
a
t
i
o
n
C
a
r
d
 
=
 
m
e
m
o
(
f
u
n
c
t
i
o
n
 
R
e
c
o
m
m
e
n
d
a
t
i
o
n
C
a
r
d
(
{


 
 
a
r
e
a
,


 
 
i
n
d
e
x
,


}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
c
o
n
f
i
g
 
=
 
T
Y
P
E
_
C
O
N
F
I
G
[
a
r
e
a
.
t
y
p
e
]
;


 
 
c
o
n
s
t
 
I
c
o
n
 
=
 
c
o
n
f
i
g
.
i
c
o
n
;


 
 
c
o
n
s
t
 
d
e
l
a
y
 
=
 
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
n
d
e
x
,
 
6
)
 
*
 
0
.
0
4
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
 
8
 
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
3
 
p
-
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
0
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
9
 
h
-
9
 
s
h
r
i
n
k
-
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
"
>


 
 
 
 
 
 
 
 
<
I
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
4
 
h
-
4
 
$
{
c
o
n
f
i
g
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
c
o
n
f
i
g
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


 
 
 
 
 
 
 
 
 
 
{
a
r
e
a
.
s
c
o
r
e
 
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
 
f
o
n
t
-
b
o
l
d
 
$
{
c
o
n
f
i
g
.
s
c
o
r
e
C
l
s
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
a
r
e
a
.
s
c
o
r
e
}
%


 
 
 
 
 
 
 
 
 
 
 
 
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
a
r
e
a
.
t
o
p
i
c
}


 
 
 
 
 
 
 
 
<
/
p
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
0
.
5
 
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
 
l
e
a
d
i
n
g
-
s
n
u
g
"
>


 
 
 
 
 
 
 
 
 
 
{
a
r
e
a
.
r
e
a
s
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
;


