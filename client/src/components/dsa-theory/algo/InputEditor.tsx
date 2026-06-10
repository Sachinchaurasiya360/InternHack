
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
 
S
h
u
f
f
l
e
 
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
e
s
e
t
 
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
 
s
t
r
i
n
g
;


}




i
n
t
e
r
f
a
c
e
 
I
n
p
u
t
E
d
i
t
o
r
P
r
o
p
s
 
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
 
s
t
r
i
n
g
;


 
 
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
?
:
 
s
t
r
i
n
g
;


 
 
h
e
l
p
e
r
?
:
 
s
t
r
i
n
g
;


 
 
p
r
e
s
e
t
s
?
:
 
P
r
e
s
e
t
[
]
;


 
 
o
n
A
p
p
l
y
:
 
(
v
a
l
u
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
 
v
o
i
d
;


 
 
o
n
R
a
n
d
o
m
?
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


 
 
m
o
n
o
s
p
a
c
e
?
:
 
b
o
o
l
e
a
n
;


}




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
 
I
n
p
u
t
E
d
i
t
o
r
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
,


 
 
h
e
l
p
e
r
,


 
 
p
r
e
s
e
t
s
,


 
 
o
n
A
p
p
l
y
,


 
 
o
n
R
a
n
d
o
m
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
 
=
 
t
r
u
e
,


}
:
 
I
n
p
u
t
E
d
i
t
o
r
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
 
[
d
r
a
f
t
,
 
s
e
t
D
r
a
f
t
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
v
a
l
u
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
e
v
V
a
l
u
e
,
 
s
e
t
P
r
e
v
V
a
l
u
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
v
a
l
u
e
)
;




 
 
/
/
 
S
y
n
c
 
l
o
c
a
l
 
d
r
a
f
t
 
w
h
e
n
 
p
a
r
e
n
t
 
u
p
d
a
t
e
s
 
v
a
l
u
e
 
e
x
t
e
r
n
a
l
l
y
 
(
r
a
n
d
o
m
/
p
r
e
s
e
t
)
.


 
 
i
f
 
(
v
a
l
u
e
 
!
=
=
 
p
r
e
v
V
a
l
u
e
)
 
{


 
 
 
 
s
e
t
P
r
e
v
V
a
l
u
e
(
v
a
l
u
e
)
;


 
 
 
 
s
e
t
D
r
a
f
t
(
v
a
l
u
e
)
;


 
 
}




 
 
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
 
g
a
p
-
2
"
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


 
 
 
 
 
 
 
 
/
 
{
l
a
b
e
l
}


 
 
 
 
 
 
<
/
l
a
b
e
l
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
d
r
a
f
t
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
{
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
D
r
a
f
t
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


 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
(
e
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
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
n
t
e
r
"
)
 
o
n
A
p
p
l
y
(
d
r
a
f
t
)
;


 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
o
n
B
l
u
r
=
{
(
)
 
=
>
 
o
n
A
p
p
l
y
(
d
r
a
f
t
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
 
p
x
-
3
 
p
y
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
l
i
m
e
-
4
0
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
5
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
m
o
n
o
s
p
a
c
e
 
?
 
"
f
o
n
t
-
m
o
n
o
"
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
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
 
o
n
A
p
p
l
y
(
d
r
a
f
t
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
p
x
-
3
 
p
y
-
2
 
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
 
h
o
v
e
r
:
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
"


 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
a
p
p
l
y


 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
{
h
e
l
p
e
r
 
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
[
1
0
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
h
e
l
p
e
r
}
<
/
p
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
{
(
p
r
e
s
e
t
s
 
&
&
 
p
r
e
s
e
t
s
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
 
|
|
 
o
n
R
a
n
d
o
m
 
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
 
p
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
{
p
r
e
s
e
t
s
?
.
m
a
p
(
(
p
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
p
.
l
a
b
e
l
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
D
r
a
f
t
(
p
.
v
a
l
u
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
(
p
.
v
a
l
u
e
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
p
x
-
2
 
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
b
o
r
d
e
r
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
3
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
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
)
}


 
 
 
 
 
 
 
 
 
 
{
o
n
R
a
n
d
o
m
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
o
n
R
a
n
d
o
m
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
 
p
x
-
2
 
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
b
o
r
d
e
r
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
3
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
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
3
 
h
-
3
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
a
n
d
o
m


 
 
 
 
 
 
 
 
 
 
 
 
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
}


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
)
 
:
 
n
u
l
l
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


