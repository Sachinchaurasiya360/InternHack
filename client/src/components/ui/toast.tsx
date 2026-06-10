
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


i
m
p
o
r
t
 
{


 
 
T
o
a
s
t
e
r
 
a
s
 
S
o
n
n
e
r
T
o
a
s
t
e
r
,


 
 
t
o
a
s
t
 
a
s
 
s
o
n
n
e
r
T
o
a
s
t
,


}
 
f
r
o
m
 
"
s
o
n
n
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
,


 
 
A
l
e
r
t
C
i
r
c
l
e
,


 
 
I
n
f
o
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


 
 
X
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
 
{
 
c
n
 
}
 
f
r
o
m
 
"
@
/
l
i
b
/
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
 
V
a
r
i
a
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
e
r
r
o
r
"
 
|
 
"
w
a
r
n
i
n
g
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
 
S
t
y
l
e
 
m
a
p
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
 
*
/




c
o
n
s
t
 
v
a
r
i
a
n
t
S
t
y
l
e
s
:
 
R
e
c
o
r
d
<
V
a
r
i
a
n
t
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


 
 
d
e
f
a
u
l
t
:
 
"
b
g
-
c
a
r
d
 
b
o
r
d
e
r
-
b
o
r
d
e
r
 
t
e
x
t
-
f
o
r
e
g
r
o
u
n
d
"
,


 
 
s
u
c
c
e
s
s
:
 
"
b
g
-
c
a
r
d
 
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
6
0
0
/
5
0
"
,


 
 
e
r
r
o
r
:
 
"
b
g
-
c
a
r
d
 
b
o
r
d
e
r
-
d
e
s
t
r
u
c
t
i
v
e
/
5
0
"
,


 
 
w
a
r
n
i
n
g
:
 
"
b
g
-
c
a
r
d
 
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
6
0
0
/
5
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
 
i
c
o
n
C
o
l
o
r
:
 
R
e
c
o
r
d
<
V
a
r
i
a
n
t
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


 
 
d
e
f
a
u
l
t
:
 
"
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
-
f
o
r
e
g
r
o
u
n
d
"
,


 
 
s
u
c
c
e
s
s
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
"
,


 
 
e
r
r
o
r
:
 
"
t
e
x
t
-
d
e
s
t
r
u
c
t
i
v
e
"
,


 
 
w
a
r
n
i
n
g
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
;




c
o
n
s
t
 
v
a
r
i
a
n
t
I
c
o
n
s
:
 
R
e
c
o
r
d
<
V
a
r
i
a
n
t
,
 
R
e
a
c
t
.
C
o
m
p
o
n
e
n
t
T
y
p
e
<
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
?
:
 
s
t
r
i
n
g
 
}
>
>
 
=
 
{


 
 
d
e
f
a
u
l
t
:
 
I
n
f
o
,


 
 
s
u
c
c
e
s
s
:
 
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
,


 
 
e
r
r
o
r
:
 
A
l
e
r
t
C
i
r
c
l
e
,


 
 
w
a
r
n
i
n
g
:
 
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


}
;




c
o
n
s
t
 
t
o
a
s
t
A
n
i
m
a
t
i
o
n
 
=
 
{


 
 
i
n
i
t
i
a
l
:
 
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
 
5
0
,
 
s
c
a
l
e
:
 
0
.
9
5
 
}
,


 
 
a
n
i
m
a
t
e
:
 
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
,
 
s
c
a
l
e
:
 
1
 
}
,


 
 
e
x
i
t
:
 
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
 
5
0
,
 
s
c
a
l
e
:
 
0
.
9
5
 
}
,


}
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
 
I
n
t
e
r
n
a
l
 
t
o
a
s
t
 
r
e
n
d
e
r
e
r
 
-
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




f
u
n
c
t
i
o
n
 
T
o
a
s
t
C
o
n
t
e
n
t
(
{


 
 
t
o
a
s
t
I
d
,


 
 
v
a
r
i
a
n
t
,


 
 
m
e
s
s
a
g
e
,


}
:
 
{


 
 
t
o
a
s
t
I
d
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
m
b
e
r
;


 
 
v
a
r
i
a
n
t
:
 
V
a
r
i
a
n
t
;


 
 
m
e
s
s
a
g
e
:
 
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


}
)
 
{


 
 
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
 
v
a
r
i
a
n
t
I
c
o
n
s
[
v
a
r
i
a
n
t
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
t
o
a
s
t
A
n
i
m
a
t
i
o
n
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
i
n
i
t
i
a
l
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
a
n
i
m
a
t
e
"


 
 
 
 
 
 
e
x
i
t
=
"
e
x
i
t
"


 
 
 
 
 
 
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
{
c
n
(


 
 
 
 
 
 
 
 
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
 
w
-
f
u
l
l
 
m
a
x
-
w
-
x
s
 
p
-
3
 
r
o
u
n
d
e
d
-
x
l
 
b
o
r
d
e
r
 
s
h
a
d
o
w
-
m
d
"
,


 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
S
t
y
l
e
s
[
v
a
r
i
a
n
t
]
,


 
 
 
 
 
 
)
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
2
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
c
n
(
"
h
-
4
 
w
-
4
 
m
t
-
0
.
5
 
s
h
r
i
n
k
-
0
"
,
 
i
c
o
n
C
o
l
o
r
[
v
a
r
i
a
n
t
]
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
m
u
t
e
d
-
f
o
r
e
g
r
o
u
n
d
"
>
{
m
e
s
s
a
g
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
o
n
n
e
r
T
o
a
s
t
.
d
i
s
m
i
s
s
(
t
o
a
s
t
I
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
"
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
 
p
-
1
 
h
o
v
e
r
:
b
g
-
m
u
t
e
d
/
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
m
u
t
e
d
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
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
r
i
n
g
"


 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
"
D
i
s
m
i
s
s
 
n
o
t
i
f
i
c
a
t
i
o
n
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
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
h
-
3
 
w
-
3
 
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
-
f
o
r
e
g
r
o
u
n
d
"
 
/
>


 
 
 
 
 
 
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
 
-
-
-
-
-
-
-
-
-
-
 
S
i
m
p
l
e
 
A
P
I
 
(
d
r
o
p
-
i
n
 
f
o
r
 
r
e
a
c
t
-
h
o
t
-
t
o
a
s
t
)
 
-
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




i
n
t
e
r
f
a
c
e
 
T
o
a
s
t
O
p
t
i
o
n
s
 
{


 
 
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


 
 
i
d
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




f
u
n
c
t
i
o
n
 
s
h
o
w
(
v
a
r
i
a
n
t
:
 
V
a
r
i
a
n
t
,
 
m
e
s
s
a
g
e
:
 
R
e
a
c
t
N
o
d
e
,
 
o
p
t
s
?
:
 
T
o
a
s
t
O
p
t
i
o
n
s
)
 
{


 
 
s
o
n
n
e
r
T
o
a
s
t
.
c
u
s
t
o
m
(


 
 
 
 
(
t
o
a
s
t
I
d
)
 
=
>
 
(


 
 
 
 
 
 
<
T
o
a
s
t
C
o
n
t
e
n
t
 
t
o
a
s
t
I
d
=
{
t
o
a
s
t
I
d
}
 
v
a
r
i
a
n
t
=
{
v
a
r
i
a
n
t
}
 
m
e
s
s
a
g
e
=
{
m
e
s
s
a
g
e
}
 
/
>


 
 
 
 
)
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
 
o
p
t
s
?
.
d
u
r
a
t
i
o
n
 
?
?
 
4
0
0
0
,
 
i
d
:
 
o
p
t
s
?
.
i
d
 
}
,


 
 
)
;


}




c
o
n
s
t
 
t
o
a
s
t
 
=
 
{


 
 
s
u
c
c
e
s
s
:
 
(
m
s
g
:
 
R
e
a
c
t
N
o
d
e
,
 
o
p
t
s
?
:
 
T
o
a
s
t
O
p
t
i
o
n
s
)
 
=
>
 
s
h
o
w
(
"
s
u
c
c
e
s
s
"
,
 
m
s
g
,
 
o
p
t
s
)
,


 
 
e
r
r
o
r
:
 
(
m
s
g
:
 
R
e
a
c
t
N
o
d
e
,
 
o
p
t
s
?
:
 
T
o
a
s
t
O
p
t
i
o
n
s
)
 
=
>
 
s
h
o
w
(
"
e
r
r
o
r
"
,
 
m
s
g
,
 
o
p
t
s
)
,


 
 
i
n
f
o
:
 
(
m
s
g
:
 
R
e
a
c
t
N
o
d
e
,
 
o
p
t
s
?
:
 
T
o
a
s
t
O
p
t
i
o
n
s
)
 
=
>
 
s
h
o
w
(
"
d
e
f
a
u
l
t
"
,
 
m
s
g
,
 
o
p
t
s
)
,


 
 
w
a
r
n
i
n
g
:
 
(
m
s
g
:
 
R
e
a
c
t
N
o
d
e
,
 
o
p
t
s
?
:
 
T
o
a
s
t
O
p
t
i
o
n
s
)
 
=
>
 
s
h
o
w
(
"
w
a
r
n
i
n
g
"
,
 
m
s
g
,
 
o
p
t
s
)
,


 
 
d
i
s
m
i
s
s
:
 
(
i
d
?
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
m
b
e
r
)
 
=
>
 
s
o
n
n
e
r
T
o
a
s
t
.
d
i
s
m
i
s
s
(
i
d
)
,


}
;




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
r
e
f
r
e
s
h
/
o
n
l
y
-
e
x
p
o
r
t
-
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
 
t
o
a
s
t
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
 
P
r
o
v
i
d
e
r
 
(
r
e
n
d
e
r
s
 
i
n
 
A
p
p
.
t
s
x
)
 
-
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
 
T
o
a
s
t
e
r
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
S
o
n
n
e
r
T
o
a
s
t
e
r


 
 
 
 
 
 
p
o
s
i
t
i
o
n
=
"
t
o
p
-
r
i
g
h
t
"


 
 
 
 
 
 
t
o
a
s
t
O
p
t
i
o
n
s
=
{
{
 
u
n
s
t
y
l
e
d
:
 
t
r
u
e
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
:
 
"
f
l
e
x
 
j
u
s
t
i
f
y
-
e
n
d
"
 
}
}


 
 
 
 
/
>


 
 
)
;


}


